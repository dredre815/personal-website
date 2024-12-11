const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.zijun2002.com/#';

// Define the routes and their configurations
const routes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/projects', changefreq: 'weekly', priority: '0.8' },
  { path: '/research', changefreq: 'monthly', priority: '0.8' },
  { path: '/cv', changefreq: 'yearly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.6' },
];

// Define blog posts
const blogPosts = [
  { 
    slug: 'llms-blockchain-security',
    changefreq: 'monthly',
    priority: '0.6'
  },
  { 
    slug: 'what-is-ethereum',
    changefreq: 'monthly',
    priority: '0.6'
  },
  { 
    slug: 'what-is-bitcoin',
    changefreq: 'monthly',
    priority: '0.6'
  }
];

// Generate the current date, format: DD-MM-YYYY
const getCurrentDate = () => {
  const date = new Date();
  return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
};

// Generate the sitemap XML content
const generateSitemapXml = () => {
  const currentDate = getCurrentDate();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add main routes
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Add blog posts
  blogPosts.forEach(post => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
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