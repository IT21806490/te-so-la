export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',          // ← auto-generates /sitemap.xml
  ],

  // Sitemap configuration
  sitemap: {
    siteUrl: 'https://techsolvelab.com',
    // Auto-discovers all prerendered routes including /blog/post-slug
    autoLastmod: true,
    // Priority hints for Google
    urls: [
      { loc: '/',               priority: 1.0, changefreq: 'weekly'  },
      { loc: '/blog',           priority: 0.9, changefreq: 'daily'   },
      { loc: '/about',          priority: 0.5, changefreq: 'monthly' },
      { loc: '/contact',        priority: 0.4, changefreq: 'monthly' },
      { loc: '/privacy-policy', priority: 0.3, changefreq: 'monthly' },
    ],
  },

  // Base URL — set via env in GitHub Actions workflow.
  // With custom domain (techsolvelab.com) this is '/'.
  // Without custom domain it is '/te-so-la/' (your repo name).
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
      // script: [
      //   {
      //     async: true,
      //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID',
      //     crossorigin: 'anonymous',
      //   },
      // ],
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

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/blog',
        '/about',
        '/contact',
        '/privacy-policy',
        '/sitemap.xml',       // ← pre-build the sitemap as a static file
      ],
      failOnError: false,
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/blog/**': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/privacy-policy': { prerender: true },
  },
})
