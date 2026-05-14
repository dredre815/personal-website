#!/usr/bin/env node

const path = require('path');
const readline = require('readline/promises');
const { execFileSync, spawnSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const readOutput = (command, args) => {
  try {
    return execFileSync(command, args, {
      cwd: rootDir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch (error) {
    return '';
  }
};

const run = (label, command, args) => {
  console.log(`\n==> ${label}`);
  console.log(`$ ${[command, ...args].join(' ')}`);

  const result = spawnSync(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
};

const promptForCommitMessage = async () => {
  const messageFromArgs = process.argv.slice(2).join(' ').trim();
  if (messageFromArgs) {
    return messageFromArgs;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    return (await rl.question('Commit message: ')).trim();
  } finally {
    rl.close();
  }
};

const ensureReadyToPublish = () => {
  const branch = readOutput('git', ['branch', '--show-current']);
  if (branch !== 'main') {
    console.error(`This script publishes the live site and must be run from main. Current branch: ${branch || '(unknown)'}`);
    process.exit(1);
  }

  const originUrl = readOutput('git', ['remote', 'get-url', 'origin']);
  if (!originUrl) {
    console.error('Missing git remote "origin"; cannot push source changes.');
    process.exit(1);
  }

  const unresolvedFiles = readOutput('git', ['diff', '--name-only', '--diff-filter=U']);
  if (unresolvedFiles) {
    console.error('Resolve merge conflicts before publishing:');
    console.error(unresolvedFiles);
    process.exit(1);
  }
};

const hasSourceChanges = () => readOutput('git', ['status', '--porcelain']).length > 0;

const main = async () => {
  ensureReadyToPublish();

  const commitMessage = await promptForCommitMessage();
  if (!commitMessage) {
    console.error('Commit message cannot be empty.');
    process.exit(1);
  }

  run('Validate content and sitemap coverage', npmCommand, ['test']);
  run('Audit production dependencies for high-risk issues', npmCommand, ['audit', '--audit-level=high']);
  run('Build production site', npmCommand, ['run', 'build']);

  if (!hasSourceChanges()) {
    console.log('\nNo source changes to commit. Live publish was skipped.');
    process.exit(0);
  }

  run('Stage source changes', 'git', ['add', '-A']);
  run('Review staged status', 'git', ['status', '--short']);
  run('Commit source changes', 'git', ['commit', '-m', commitMessage]);
  run('Push source branch', 'git', ['push', 'origin', 'main']);
  run('Publish build to GitHub Pages', npmCommand, ['run', 'publish:site']);

  console.log('\nSite update complete: source pushed to main and build published to GitHub Pages.');
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
