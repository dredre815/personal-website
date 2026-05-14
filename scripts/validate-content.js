const fs = require('fs');
const path = require('path');
const {
  BASE_URL,
  blogPosts,
  routes,
} = require('./generate-sitemap');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const errors = [];

const assert = (condition, message) => {
  if (!condition) {
    errors.push(message);
  }
};

const slugs = new Set();
const filenames = new Set();

blogPosts.forEach((post, index) => {
  assert(Number.isInteger(post.id), `Blog post at index ${index} is missing an integer id.`);
  assert(post.title, `Blog post ${post.id || index} is missing a title.`);
  assert(post.slug, `Blog post ${post.id || index} is missing a slug.`);
  assert(!slugs.has(post.slug), `Duplicate blog slug: ${post.slug}`);
  slugs.add(post.slug);

  assert(post.filename, `Blog post ${post.slug || index} is missing a filename.`);
  assert(!filenames.has(post.filename), `Duplicate blog filename: ${post.filename}`);
  filenames.add(post.filename);
  assert(fs.existsSync(path.join(publicDir, post.filename)), `Missing public blog file: ${post.filename}`);

  assert(!Number.isNaN(Date.parse(post.publishDate)), `Invalid publishDate for ${post.slug}.`);
  assert(post.displayDate, `Blog post ${post.slug} is missing displayDate.`);
  assert(Number.isInteger(post.readingTime) && post.readingTime > 0, `Invalid readingTime for ${post.slug}.`);
  assert(post.changefreq, `Blog post ${post.slug} is missing changefreq.`);
  assert(post.priority, `Blog post ${post.slug} is missing priority.`);
});

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const expectedLocs = [
    ...routes.map((route) => `${BASE_URL}${route.path}`),
    ...blogPosts.map((post) => `${BASE_URL}/blog/${post.slug}`),
  ];

  expectedLocs.forEach((loc) => {
    assert(sitemap.includes(`<loc>${loc}</loc>`), `public/sitemap.xml is missing ${loc}.`);
  });
} else {
  errors.push('public/sitemap.xml is missing. Run npm run generate-sitemap.');
}

if (errors.length > 0) {
  console.error('Content validation failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Content validation passed: ${blogPosts.length} blog posts and ${routes.length} routes.`);
