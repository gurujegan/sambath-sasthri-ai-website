// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-gtag'
  ],

  // Global page headers
  app: {
    head: {
      title: 'Thila Homam & Pitru Dosha Puja in Thirupullani, Sethukarai & Rameswaram',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'theme-color', content: '#4A1611' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icons8-om-96.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@400;500;600&family=Marcellus&family=Noto+Serif+Tamil:wght@500;600&display=swap' }
      ]
    }
  },

  // Keep Nuxt 2's link class names so existing CSS keeps working
  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: 'nuxt-link-active',
        exactActiveClass: 'nuxt-link-exact-active',
        trailingSlash: 'append'
      }
    }
  },

  site: {
    url: 'https://www.sambathsasthri.in',
    trailingSlash: true
  },

  sitemap: {
    exclude: ['/exclude/**']
  },

  robots: {
    disallow: ['/admin']
  },

  // Old/test pages under /exclude are still generated; keep them out of search results.
  // (noindex rather than a robots.txt Disallow, so crawlers can actually see the noindex.)
  routeRules: {
    '/exclude/**': { robots: false }
  },

  // Google Analytics 4 web stream "Sambath Sasthri"
  gtag: {
    id: 'G-C3DZ4L2H5K'
  },

  content: {
    renderer: {
      // Headings like "## [H.Sambath Sasthri](/about/)" would otherwise nest <a> inside <a>
      anchorLinks: false
    },
    experimental: {
      // Use Node's built-in SQLite (Node >= 22.5) instead of the better-sqlite3 native addon
      sqliteConnector: 'native'
    }
  },

  // Static site: `nuxt generate` pre-renders every page reachable from these routes
  nitro: {
    prerender: {
      crawlLinks: true,
      // Nuxt queues "/about" while the crawler finds "/about/"; rendered in parallel, both
      // write the same payload cache file and fail with EPERM on Windows. The site is small.
      concurrency: 1,
      routes: ['/', '/sitemap.xml', '/robots.txt']
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  }
})
