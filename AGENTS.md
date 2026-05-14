# Repository Instructions for Codex

## Global Instruction Summary

- Follow the most specific instruction file in scope; repository instructions override global defaults.
- Prefer small, reviewable diffs and preserve existing architecture unless a change is needed for the task.
- Inspect relevant files, configs, scripts, tests, and call sites before editing.
- Define the intended behavior and the narrowest useful verification before non-trivial changes.
- Protect secrets and credentials. Never write tokens, private keys, or `.env` values into the repository.
- Do not revert, overwrite, or reformat unrelated user changes.
- Ask before dependency installs, lockfile strategy changes, CI/CD changes, destructive commands, or production-facing actions.
- Keep code, comments, commit messages, docs, and other durable technical artifacts in English. Chinese is fine for chat with the user.

## Project Overview

This is a Vite React personal website for `www.zijun2002.com`, deployed with GitHub Pages.

- Main app code lives in `src/`.
- Page components live in `src/pages/`.
- Shared components live in `src/components/`.
- Theme and global styling live in `src/styles/`.
- Blog metadata lives in `src/data/blogPosts.json`.
- Public assets, blog Markdown files, `CV.pdf`, `robots.txt`, and `sitemap.xml` live in `public/`.
- Maintenance scripts live in `scripts/`.

The app uses `HashRouter` intentionally for GitHub Pages compatibility. Keep public URLs and sitemap entries aligned with the `https://www.zijun2002.com/#` route base unless the deployment strategy changes.

## Development Commands

- `npm ci` installs dependencies from the lockfile.
- `npm start` starts the Vite dev server on `127.0.0.1`.
- `npm test` validates blog metadata and sitemap coverage.
- `npm run build` creates the production build in `build/` and regenerates the sitemap.
- `npm run preview` previews the production build locally.
- `npm run deploy` builds and publishes `build/` to GitHub Pages.
- `npm run update-site` validates, audits, builds, commits, pushes `main`, and publishes the live site.

## Verification Rules

For most content or UI updates, run at least:

```bash
npm test
npm run build
```

Use `npm start` or `npm run preview` for visual checks when layout, routing, CV rendering, blog rendering, theme behavior, or navigation changes. Use the browser for local visual verification after meaningful frontend changes.

## Content Update Rules

- Add or edit blog metadata in `src/data/blogPosts.json`.
- Store blog Markdown files in `public/` and reference them from `blogPosts.json`.
- Keep blog slugs stable after publication unless the user explicitly requests a URL change.
- Replace the public CV at `public/CV.pdf`; update visible CV metadata in `src/pages/CV.jsx` when needed.
- Keep research/project sort fields explicit when display dates are not naturally sortable.
- Reference public assets from React through `import.meta.env.BASE_URL` when paths must work in production builds.

## Deployment Rules

- Do not run `npm run update-site`, `npm run deploy`, `npm run publish:site`, or any git push after content updates unless the user explicitly asks for publishing after their manual check.
- After completing an update, report the changed files and verification results, then wait for the user to review locally.
- The standard publishing path is `npm run update-site`; it prompts for a commit message and then handles validation, build, source push, and GitHub Pages publish.
- Publish only from `main` unless the user explicitly changes the deployment workflow.
- Do not manually edit `build/`; it is generated output.

## Architecture Rules

- Keep the Vite setup; do not reintroduce Create React App or `react-scripts`.
- JSX-bearing React files should use `.jsx`.
- Shared structured content should live in `src/data/` instead of being duplicated across scripts and UI.
- Keep sitemap generation in `scripts/generate-sitemap.js` and content checks in `scripts/validate-content.js`.
- Avoid adding analytics, telemetry, or new third-party network calls unless the user explicitly requests them.
