const fs = require('fs')
const path = require('path')

// Site configuration
const siteConfig = {
  url: 'https://bbhomebakery.ro',
  lastmod: new Date().toISOString().split('T')[0]
}

// Pages to include in sitemap
const pages = [
  { url: '', priority: '1.0', changefreq: 'weekly' },
  { url: '/meniu', priority: '0.9', changefreq: 'weekly' },
  { url: '/galerie', priority: '0.8', changefreq: 'monthly' },
  { url: '/despre', priority: '0.7', changefreq: 'monthly' },
  { url: '/comanda', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/locatii', priority: '0.8', changefreq: 'monthly' }
]

// Blog posts (from site config)
const blogPosts = [
  { slug: 'ingrediente-naturale', priority: '0.6', changefreq: 'monthly' },
  { slug: 'istoria-cofetariei', priority: '0.6', changefreq: 'monthly' },
  { slug: 'retete-traditionale', priority: '0.6', changefreq: 'monthly' }
]

// Generate sitemap XML
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // Add main pages
  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${siteConfig.url}${page.url}</loc>
    <lastmod>${siteConfig.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  })

  // Add blog posts
  blogPosts.forEach(post => {
    sitemap += `
  <url>
    <loc>${siteConfig.url}/blog/${post.slug}</loc>
    <lastmod>${siteConfig.lastmod}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>`
  })

  sitemap += `
</urlset>`

  return sitemap
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemap = generateSitemap()
  const publicDir = path.join(process.cwd(), 'public')
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap)
  
  console.log('✅ Sitemap generated successfully at:', sitemapPath)
  console.log(`📄 Generated sitemap with ${pages.length + blogPosts.length} URLs`)
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteConfig.url}/sitemap.xml

# Disallow admin and private areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow all other content
Allow: /meniu
Allow: /galerie
Allow: /despre
Allow: /comanda
Allow: /blog
Allow: /contact
Allow: /locatii
Allow: /assets/

# Crawl delay (optional)
Crawl-delay: 1`

  const publicDir = path.join(process.cwd(), 'public')
  const robotsPath = path.join(publicDir, 'robots.txt')
  fs.writeFileSync(robotsPath, robotsTxt)
  
  console.log('✅ Robots.txt generated successfully at:', robotsPath)
}

// Run the generation
if (require.main === module) {
  console.log('🚀 Generating sitemap and robots.txt...')
  writeSitemap()
  generateRobotsTxt()
  console.log('✨ Done!')
}

module.exports = { generateSitemap, generateRobotsTxt }
