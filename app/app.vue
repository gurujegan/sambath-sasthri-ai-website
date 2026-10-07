<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()

// Every page is served with a trailing slash (see nuxt.config `site.trailingSlash`)
const canonicalUrl = computed(() => {
  const path = route.path.endsWith('/') ? route.path : `${route.path}/`
  return `${site.url}${path}`
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

// Site-wide social-share defaults; pages override title, description and image via usePageSeo()
useSeoMeta({
  ogSiteName: site.name,
  ogType: 'website',
  ogLocale: 'en_IN',
  ogUrl: canonicalUrl,
  ogImage: absoluteUrl(site.defaultImage),
  twitterCard: 'summary_large_image',
  twitterImage: absoluteUrl(site.defaultImage)
})
</script>
