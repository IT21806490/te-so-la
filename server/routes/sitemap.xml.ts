import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const siteUrl = 'https://techsolvelab.com'

  // Fetch all blog posts from content
  const posts = await serverQueryContent(event, '/posts')
    .only(['_path', 'date', 'title'])
    .find()

  // Static pages
  const staticPages = [
    { loc: '/',               priority: '1.0', changefreq: 'weekly'  },
    { loc: '/blog',           priority: '0.9', changefreq: 'daily'   },
    { loc: '/about',          priority: '0.5', changefreq: 'monthly' },
    { loc: '/contact',        priority: '0.4', changefreq: 'monthly' },
    { loc: '/privacy-policy', priority: '0.3', changefreq: 'yearly'  },
  ]

  // Blog post pages
  const postPages = posts.map((post) => {
    const slug = post._path!.replace('/posts/', '')
    const lastmod = post.date
      ? new Date(post.date).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0]
    return {
      loc: `/blog/${slug}`,
      lastmod,
      priority: '0.8',
      changefreq: 'monthly',
    }
  })

  const allPages = [...staticPages, ...postPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map((page) => {
    const lines = [`  <url>`, `    <loc>${siteUrl}${page.loc}</loc>`]
    if ('lastmod' in page && page.lastmod) lines.push(`    <lastmod>${page.lastmod}</lastmod>`)
    if (page.changefreq) lines.push(`    <changefreq>${page.changefreq}</changefreq>`)
    if (page.priority)   lines.push(`    <priority>${page.priority}</priority>`)
    lines.push(`  </url>`)
    return lines.join('\n')
  })
  .join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'max-age=600')
  return sitemap
})