<template>
  <article v-if="post">
    <header class="bg-kolam border-b border-sandal-300/70">
      <div class="container-page grid items-center gap-10 py-12 sm:py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <NuxtLink to="/services/" class="inline-flex items-center gap-2 text-sm font-semibold text-kumkum-700 hover:text-saffron-600">
            <AppIcon name="back" class="h-4 w-4" />
            All services
          </NuxtLink>
          <h1 class="mt-4 text-4xl sm:text-5xl">{{ post.title }}</h1>
          <OrnamentDivider class="mt-5 !justify-start" />
          <p class="mt-5 text-lg leading-8 text-ink-muted">{{ post.description }}</p>
        </div>
        <div v-if="post.cardImageUrl" class="mx-auto w-full max-w-xs md:max-w-sm">
          <div class="arch-frame aspect-[4/5]">
            <img :src="post.cardImageUrl" :alt="post.cardImageAlt || post.title" class="h-full w-full object-cover">
          </div>
        </div>
      </div>
    </header>

    <div class="container-page py-12 sm:py-16">
      <div class="prose prose-lg prose-temple article-body mx-auto max-w-3xl">
        <ContentRenderer :value="post" />

        <section v-if="post.faq?.length" id="faq">
          <h2>Frequently asked questions</h2>
          <template v-for="item in post.faq" :key="item.question">
            <h3>{{ item.question }}</h3>
            <p>{{ item.answer }}</p>
          </template>
        </section>
      </div>
    </div>

    <CallCta />
  </article>
</template>

<script setup>
const props = defineProps({
  articleName: { type: String, required: true }
})

const { data: post } = await useAsyncData(`services-${props.articleName}`, () =>
  queryCollection('services').path(`/services/${props.articleName}`).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

usePageSeo({
  title: () => post.value?.seo?.title || `${post.value?.title} | Sambath Sasthri`,
  description: () => post.value?.seo?.description || post.value?.description,
  image: () => post.value?.cardImageUrl
})

useSeoMeta({
  ogType: 'article',
  ogImageAlt: () => post.value?.cardImageAlt || post.value?.title,
  articlePublishedTime: () => post.value?.datePublished
})

const pageUrl = `${site.url}/${props.articleName}/`

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: () => JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.value?.title,
        description: post.value?.seo?.description || post.value?.description,
        image: absoluteUrl(post.value?.cardImageUrl),
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        inLanguage: 'en-IN',
        ...(post.value?.datePublished && { datePublished: post.value.datePublished }),
        author: { '@type': 'Person', name: 'H. Sambath Sasthri', url: `${site.url}/about/` },
        publisher: { '@type': 'Organization', name: site.name, logo: absoluteUrl('/icons8-om-96.png') }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services/` },
          { '@type': 'ListItem', position: 3, name: post.value?.title, item: pageUrl }
        ]
      },
      ...(post.value?.faq?.length
        ? [{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.value.faq.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer }
            }))
          }]
        : [])
    ])
  }]
})
</script>

<style scoped>
/* Markdown body tweaks on top of the typography plugin */
.article-body :deep(h2) {
  @apply mt-14 border-b border-gold-300/70 pb-2;
}

.article-body :deep(h5) {
  @apply mt-8 font-display text-xl text-kumkum-800;
}

.article-body :deep(hr) {
  @apply my-12 h-px border-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent;
}

.article-body :deep(table) {
  @apply overflow-hidden rounded-xl bg-white/70 text-base;
}

.article-body :deep(thead th) {
  @apply bg-kumkum-800 px-4 py-3 text-sandal-50;
}

.article-body :deep(tbody td) {
  @apply px-4 py-2.5;
}

.article-body :deep(tbody tr:nth-child(even)) {
  @apply bg-sandal-100/80;
}

.article-body :deep(address) {
  @apply not-italic;
}

.article-body :deep(img) {
  @apply rounded-xl shadow-md;
}

.article-body :deep(figcaption) {
  @apply text-center;
}
</style>
