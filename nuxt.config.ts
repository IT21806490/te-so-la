import { globby } from 'globby'
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en-US' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
      // ─── Google AdSense ─────────────────────────────────────────────────
      // Uncomment and replace YOUR_PUBLISHER_ID after AdSense approval:
      script: [
        {
          async: true,
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5769619247124269',
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  content: {
    highlight: {
      theme: 'github-light',
      langs: ['js', 'ts', 'html', 'css', 'bash', 'json', 'python'],
    },
    markdown: {
      anchorLinks: false,
    },
  },

  // ── Dynamically add every blog post to the prerender list ──────────────
  // Uses a hook so @nuxt/content can still call .unshift() on the routes array
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) return

      const files = await globby('content/posts/*.md', {
        cwd: path.resolve(process.cwd()),
      })

      const postRoutes = files
        .filter(f => !path.basename(f).startsWith('_'))  // skip _TEMPLATE
        .map(f => `/blog/${path.basename(f, '.md')}`)

      // Merge with existing routes array (keep it as an array, not a function)
      const existing = Array.isArray(nitroConfig.prerender?.routes)
        ? nitroConfig.prerender!.routes as string[]
        : []

      nitroConfig.prerender!.routes = [
        ...existing,
        ...postRoutes,
      ]
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      // Static routes as a plain array — @nuxt/content needs this to be an array
      routes: [
        '/',
        '/blog',
        '/about',
        '/contact',
        '/privacy-policy',
        '/sitemap.xml',
      ],
    },
  },

  routeRules: {
    '/':               { prerender: true },
    '/blog':           { prerender: true },
    '/about':          { prerender: true },
    '/contact':        { prerender: true },
    '/privacy-policy': { prerender: true },
    '/blog/**':        { prerender: true },
    '/sitemap.xml':    { prerender: true },
  },
})
