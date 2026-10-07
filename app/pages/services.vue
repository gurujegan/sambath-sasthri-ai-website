<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="Our Services"
      title-ta="எங்கள் சேவைகள்"
      lead="Thila Homam for Pitru Dosha nivarthi at Thirupullani and Sethukarai, with travel and stay taken care of for your family."
    />

    <PageContent>
      <div class="space-y-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="`/${post.stem.split('/').pop()}/`"
          class="card group grid overflow-hidden transition hover:-translate-y-0.5 hover:shadow-xl md:grid-cols-[18rem_1fr]"
        >
          <div class="aspect-[4/3] overflow-hidden bg-sandal-200 md:aspect-auto">
            <img
              :src="post.cardImageUrl"
              :alt="post.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            >
          </div>
          <div class="flex flex-col justify-center p-6 sm:p-8">
            <h2 class="text-2xl sm:text-3xl">{{ post.title }}</h2>
            <p class="mt-3 text-lg leading-8 text-ink-muted">{{ post.description }}</p>
            <span class="mt-5 inline-flex items-center gap-2 font-semibold text-kumkum-700">
              Read more
              <AppIcon name="arrow" class="h-5 w-5 transition group-hover:translate-x-1" />
            </span>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-16 rounded-2xl border border-gold-300/70 bg-sandal-100 p-8 text-center">
        <h2 class="text-2xl">Other auspicious functions</h2>
        <p class="mx-auto mt-3 max-w-2xl text-lg text-ink-muted">
          Ganapathi Homam, Thirumana Vaibhavam (Wedding), Punyahavachanam, Gruhapravesam, Kumbabhishekam and
          shanthi pariharam for sakala dosha nivarthi at Adhi Sethu.
        </p>
      </div>
    </PageContent>

    <CallCta />
  </div>
</template>

<script setup>
usePageSeo({
  title: 'Services | Thila Homam, Travel & Accommodation – Sambath Shastri',
  description: 'Thila Homam for Pitru Dosha nivarthi at Thirupullani and Sethukarai, travel and stay for your family, and Vedic rituals like Ganapathi Homam and Gruhapravesam.'
})

const { data: posts } = await useAsyncData('services', () =>
  queryCollection('services').order('order', 'ASC').all()
)
</script>
