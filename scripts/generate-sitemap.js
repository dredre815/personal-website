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

// Define blog posts with their publish dates
const blogPosts = [
  { 
    slug: 'llms-blockchain-security',
    publishDate: '2024-11-17T11:30:00.000Z',
    changefreq: 'yearly',
    priority: '0.6'
  },
  { 
    slug: 'what-is-ethereum',
    publishDate: '2024-11-14T13:41:00.000Z',
    changefreq: 'yearly',
    priority: '0.6'
  },
  { 
    slug: 'what-is-bitcoin',
    publishDate: '2024-11-09T08:30:00.000Z',
    changefreq: 'yearly',
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

  // Add blog posts with their fixed publish dates
  blogPosts.forEach(post => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.publishDate}</lastmod>\n`;
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

// Generate the sitemap content
const sitemap = generateSitemapXml();

// Write the sitemap.xml file to public directory (for source control)
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Also write to build directory if it exists (for deployment)
const buildDir = path.join(__dirname, '../build');
if (fs.existsSync(buildDir)) {
  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully in both public/ and build/ directories!');
} else {
  console.log('Sitemap generated successfully in public/ directory!');
} 