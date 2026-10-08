<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-kolam">
      <div
        class="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-saffron-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div class="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr]">
        <div class="text-center lg:text-left">
          <p class="eyebrow">Thirupullani · Sethukarai · Rameswaram</p>
          <h1 class="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Thila Homam &amp; Pitru&nbsp;Dosha Nivarthi
          </h1>
          <p lang="ta" class="mt-4 text-xl text-saffron-700">பித்ரு தோஷ நிவர்த்திக்காக தில ஹோமம்</p>
          <OrnamentDivider class="mt-6 lg:!justify-start" />
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-ink-muted lg:mx-0">
            Two decades of dedicated service to devotees, fulfilling their needs with the right rituals.
            Performed by H. Sambath Sasthri at the sacred Sethu shore, with food and accommodation
            arranged for your family.
          </p>
          <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a :href="site.phoneHref" class="btn-primary text-lg">
              <AppIcon name="phone" class="h-5 w-5" />
              Call {{ site.phone }}
            </a>
            <NuxtLink to="/services/" class="btn-outline">Explore services</NuxtLink>
          </div>
        </div>

        <div class="mx-auto w-full max-w-sm">
          <div class="arch-frame aspect-[4/5] shadow-2xl">
            <img
              src="/images/thila-homam.webp"
              alt="The sacred fire of a Thila Homam at Thirupullani"
              class="h-full w-full object-cover"
              fetchpriority="high"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="border-y border-gold-300/60 bg-sandal-50">
      <ul class="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="item in highlights" :key="item.title" class="flex gap-4">
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-saffron-100 text-saffron-600">
            <AppIcon :name="item.icon" class="h-6 w-6" />
          </span>
          <div>
            <h2 class="font-display text-lg text-kumkum-800">{{ item.title }}</h2>
            <p class="mt-1 text-[0.95rem] leading-6 text-ink-muted">{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Services -->
    <section class="container-page py-16 sm:py-20">
      <div class="text-center">
        <p class="eyebrow">Services</p>
        <h2 class="mt-3 text-3xl sm:text-4xl">Rituals performed with devotion</h2>
        <OrnamentDivider class="mt-5" />
      </div>
      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="service in services"
          :key="service.to"
          v-bind="service"
        />
      </div>
    </section>

    <!-- About teaser -->
    <section class="bg-kolam border-t border-sandal-300/70">
      <div class="container-page grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <img
          src="/images/home-banner.webp"
          alt="Sambath Sasthri guiding a family through a Pitru Dosha ritual"
          class="w-full rounded-2xl object-cover shadow-xl ring-4 ring-gold-300/70"
          loading="lazy"
        >
        <div>
          <p class="eyebrow">About</p>
          <h2 class="mt-3 text-3xl sm:text-4xl">H. Sambath Sasthri</h2>
          <p class="mt-1 text-lg text-saffron-700">Adhyana Pattar, Vazhividu Murugan Temple</p>
          <p class="mt-5 text-lg leading-8 text-ink-muted">
            A disciple of T.P.L.S. Lakshmana Sastri of Thirupullani, he has performed Thila Homam for
            over two decades across Ramanathapuram, Thirupullani, Sethukarai and Rameswaram. Thousands of
            devotees have benefited from rituals done the right way.
          </p>
          <NuxtLink to="/about/" class="btn-outline mt-7">
            Read more
            <AppIcon name="arrow" class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <CallCta />
  </div>
</template>

<script setup>
usePageSeo({
  title: 'Thila Homam & Pitru Dosha Puja in Thirupullani, Sethukarai & Rameswaram',
  description: 'Thila Homam and Pitru Dosha nivarthi at Thirupullani, Sethukarai & Rameswaram by H. Sambath Sasthri. Over 20 years of service, with food and accommodation arranged.'
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#business`,
      name: 'Sambath Sasthri – Thila Homam, Thirupullani',
      description: 'Thila Homam and Pitru Dosha nivarthi rituals at Thirupullani, Sethukarai and Rameswaram, with food and accommodation for devotees.',
      url: `${site.url}/`,
      image: absoluteUrl(site.defaultImage),
      logo: absoluteUrl('/icons8-om-96.png'),
      telephone: site.phoneHref.replace('tel:', ''),
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'South Car Street, next to Ahobila Mutt',
        addressLocality: 'Thirupullani',
        addressRegion: 'Tamil Nadu',
        postalCode: '623532',
        addressCountry: 'IN'
      },
      areaServed: ['Thirupullani', 'Sethukarai', 'Rameswaram', 'Ramanathapuram'],
      openingHours: 'Mo-Su 00:00-23:59',
      founder: { '@type': 'Person', name: 'H. Sambath Sasthri', url: `${site.url}/about/` }
    })
  }]
})

const highlights = [
  { icon: 'years', title: '20+ years', text: 'Performing Thila Homam for Pitru Dosha nivarthi for over two decades.' },
  { icon: 'flame', title: 'At Adhi Sethu', text: 'Shanthi pariharam at Sethukarai, where Lord Rama began the bridge to Lanka.' },
  { icon: 'home', title: 'Food & stay', text: 'Rooms at Thirukkurungudi Jeeyar Mutt, next to the temple gopuram.' },
  { icon: 'language', title: 'We speak your language', text: `Guidance in ${site.languages}.` }
]

const tamilTitles = {
  'thila-homam': 'தில ஹோமம்',
  'travel-and-accommodation-in-thirupullani':'பயணித்தல் மற்றும் இடவசதி'
}

const { data: posts } = await useAsyncData('services', () =>
  queryCollection('services').order('order', 'ASC').all()
)

const services = computed(() => [
  ...(posts.value || []).map((post) => {
    const slug = post.stem.split('/').pop()
    return {
      to: `/${slug}/`,
      title: post.title,
      titleTa: tamilTitles[slug],
      description: post.description,
      image: post.cardImageUrl
    }
  }),
  {
    to: '/about/',
    title: 'Other Vedic rituals',
    titleTa: 'சுப நிகழ்ச்சிகள்',
    description: 'Ganapathi Homam, Thirumana Vaibhavam (wedding), Punyahavachanam, Gruhapravesam, Kumbabhishekam and more.',
    image: '/images/Kumbham.webp',
    imageAlt: 'Kalasams prepared on banana leaf for a homam'
  }
])
</script>
