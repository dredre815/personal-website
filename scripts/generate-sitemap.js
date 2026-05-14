const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const blogPosts = require('../src/data/blogPosts.json');

const BASE_URL = 'https://www.zijun2002.com/#';
const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(__dirname, '../src');

const routes = [
  { path: '/', file: 'pages/Home.jsx', changefreq: 'monthly', priority: '1.0' },
  { path: '/projects', file: 'pages/Projects.jsx', changefreq: 'weekly', priority: '0.8' },
  { path: '/research', file: 'pages/Research.jsx', changefreq: 'monthly', priority: '0.8' },
  { path: '/cv', file: 'pages/CV.jsx', changefreq: 'yearly', priority: '0.7' },
  { path: '/blog', file: 'pages/Blog.jsx', changefreq: 'weekly', priority: '0.6' },
];

const formatDate = (date) => date.toISOString();

const readGitOutput = (args) => {
  try {
    return execFileSync('git', args, {
      cwd: ROOT_DIR,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch (error) {
    return '';
  }
};

const hasWorkingTreeChanges = (relativePath) => (
  readGitOutput(['status', '--porcelain', '--', relativePath]).length > 0
);

const getGitLastModifiedDate = (relativePath) => {
  const lastCommitDate = readGitOutput(['log', '-1', '--format=%cI', '--', relativePath]);
  return lastCommitDate || null;
};

const getLastModifiedDate = (filePath) => {
  const relativePath = path.posix.join('src', filePath);

  if (!hasWorkingTreeChanges(relativePath)) {
    const gitDate = getGitLastModifiedDate(relativePath);
    if (gitDate) {
      return gitDate;
    }
  }

  try {
    const stats = fs.statSync(path.join(SRC_DIR, filePath));
    return formatDate(stats.mtime);
  } catch (error) {
    console.warn(`Warning: Could not get last modified date for ${filePath}. Using current date.`);
    return formatDate(new Date());
  }
};

const generateUrlEntry = ({ loc, lastmod, changefreq, priority }) => [
  '  <url>',
  `    <loc>${loc}</loc>`,
  `    <lastmod>${lastmod}</lastmod>`,
  `    <changefreq>${changefreq}</changefreq>`,
  `    <priority>${priority}</priority>`,
  '  </url>',
].join('\n');

const generateSitemapXml = () => {
  const entries = [
    ...routes.map((route) => generateUrlEntry({
      loc: `${BASE_URL}${route.path}`,
      lastmod: getLastModifiedDate(route.file),
      changefreq: route.changefreq,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => generateUrlEntry({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: post.publishDate,
      changefreq: post.changefreq,
      priority: post.priority,
    })),
  ];

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries.join('\n'),
    '</urlset>',
  ].join('\n');
};

const writeSitemap = () => {
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemap = generateSitemapXml();
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

  const buildDir = path.join(__dirname, '../build');
  if (fs.existsSync(buildDir)) {
    fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully in both public/ and build/ directories!');
  } else {
    console.log('Sitemap generated successfully in public/ directory!');
  }
};

if (require.main === module) {
  writeSitemap();
}

module.exports = {
  BASE_URL,
  blogPosts,
  generateSitemapXml,
  routes,
  writeSitemap,
};
