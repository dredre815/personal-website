const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.zijun2002.com/#';
const SRC_DIR = path.join(__dirname, '../src');

// Define the routes and their configurations
const routes = [
  { path: '/', file: 'pages/Home.js', changefreq: 'monthly', priority: '1.0' },
  { path: '/projects', file: 'pages/Projects.js', changefreq: 'weekly', priority: '0.8' },
  { path: '/research', file: 'pages/Research.js', changefreq: 'monthly', priority: '0.8' },
  { path: '/cv', file: 'pages/CV.js', changefreq: 'yearly', priority: '0.7' },
  { path: '/blog', file: 'pages/Blog.js', changefreq: 'weekly', priority: '0.6' },
];

// Define blog posts
const blogPosts = [
  { 
    slug: 'llms-blockchain-security',
    file: 'pages/blog/llms-blockchain-security.js',
    changefreq: 'monthly',
    priority: '0.6'
  },
  { 
    slug: 'what-is-ethereum',
    file: 'pages/blog/what-is-ethereum.js',
    changefreq: 'monthly',
    priority: '0.6'
  },
  { 
    slug: 'what-is-bitcoin',
    file: 'pages/blog/what-is-bitcoin.js',
    changefreq: 'monthly',
    priority: '0.6'
  }
];

// Format date to ISO 8601 format with timezone
const formatDate = (date) => {
  return date.toISOString();
};

// Get the last modified date of a file
const getLastModifiedDate = (filePath) => {
  try {
    const stats = fs.statSync(path.join(SRC_DIR, filePath));
    return formatDate(stats.mtime);
  } catch (error) {
    console.warn(`Warning: Could not get last modified date for ${filePath}. Using current date.`);
    return formatDate(new Date());
  }
};

// Generate the sitemap XML content
const generateSitemapXml = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add main routes
  routes.forEach(route => {
    const lastmod = getLastModifiedDate(route.file);
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Add blog posts
  blogPosts.forEach(post => {
    const lastmod = getLastModifiedDate(post.file);
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${post.changefreq}</changefreq>\n`;
    xml += `    <priority>${post.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
};

// Ensure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the sitemap.xml file
const sitemap = generateSitemapXml();
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!'); 