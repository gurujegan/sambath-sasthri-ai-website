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
      title: 'Thila Homam & Pitru Dosha puja services in Thirupullani, Sethukarai & Rameshwaram',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Get your Thila Homam done at Thirupullani with best accomodation & food service. Two decades of dedicated services to devotees & fulfilling their needs with right rituals. Well experienced pundits and high quality service.' },
        { name: 'format-detection', content: 'telephone=yes' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icons8-om-96.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oxygen&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.3.0/mdb.min.css' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.3.0/mdb.min.js', defer: true }
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
    url: 'https://www.sambathshastri.in',
    trailingSlash: true
  },

  sitemap: {
    exclude: ['/exclude/**']
  },

  robots: {
    disallow: ['/admin', '/exclude']
  },

  // NOTE: Universal Analytics (UA-*) stopped collecting data in 2023.
  // Replace this with your GA4 measurement ID (G-XXXXXXXXXX).
  gtag: {
    id: 'UA-244280787-2'
  },

  content: {
    renderer: {
      // Headings like "## [H.Sambath Shastri](/about/)" would otherwise nest <a> inside <a>
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
