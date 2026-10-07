<template>
  <div>
    <PageHero
      eyebrow="About"
      title="H. Sambath Shastri"
      :title-ta="site.nameTa"
      lead="Adhyana Pattar at Arulmigu Sri Vazhividu Murugan Temple, Ramanathapuram."
    />

    <PageContent>
      <div class="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <aside class="mx-auto w-full max-w-sm">
          <div class="arch-frame aspect-[3/4]">
            <img
              src="/images/sambath-shastri1.webp"
              alt="H. Sambath Shastri"
              class="h-full w-full object-cover object-top"
            >
          </div>

          <div class="card mt-10 p-6">
            <h2 class="text-xl">Contact</h2>
            <a :href="site.phoneHref" class="mt-3 flex items-center gap-3 text-lg font-semibold text-kumkum-700 hover:underline">
              <AppIcon name="phone" class="h-5 w-5 text-saffron-600" />
              {{ site.phone }}
            </a>
            <div class="mt-4 flex gap-3 text-ink-muted">
              <AppIcon name="pin" class="mt-1 h-5 w-5 shrink-0 text-saffron-600" />
              <address class="not-italic leading-7">
                <span v-for="line in site.places[1].lines" :key="line" class="block">{{ line }}</span>
              </address>
            </div>
          </div>
        </aside>

        <section aria-labelledby="about-heading">
          <h2 id="about-heading" class="text-3xl">Two decades of service at the Sethu shore</h2>
          <ul class="mt-8 space-y-6">
            <li v-for="(point, i) in points" :key="i" class="flex gap-4">
              <AppIcon name="lotus" class="mt-1 h-6 w-6 shrink-0 text-saffron-500" />
              <p class="text-lg leading-8">
                <template v-if="point.link">
                  {{ point.before }}<NuxtLink :to="point.link.to" class="font-semibold text-kumkum-700 underline decoration-gold-400 underline-offset-4 hover:text-saffron-600">{{ point.link.label }}</NuxtLink>{{ point.after }}
                </template>
                <template v-else>{{ point.text }}</template>
              </p>
            </li>
          </ul>

          <div class="mt-12 grid gap-4 sm:grid-cols-2">
            <img src="/images/Mattukottakai.webp" alt="Sambath Shastri performing a homam with a family" class="aspect-[4/3] w-full rounded-xl object-cover shadow-md" loading="lazy">
            <img src="/images/thirupullani-premise.webp" alt="Thila Homam premises at Thirupullani" class="aspect-[4/3] w-full rounded-xl object-cover shadow-md" loading="lazy">
          </div>
        </section>
      </div>
    </PageContent>

    <CallCta />
  </div>
</template>

<script setup>
useSeoMeta({ title: 'About H. Sambath Shastri | Thila Homam at Thirupullani' })

const points = [
  { text: 'Adhyana Battar at Vazhividu Murugan Temple.' },
  {
    before: 'He has been performing ',
    link: { to: '/thila-homam/', label: 'Thila Homam' },
    after: ' for the past two decades in Ramanathapuram, Thirupullani, Sethukarai & Rameswaram to get nivarthi from Pithru Dosha.'
  },
  { text: 'He dedicatedly performs shanthi pariharam for sakala dosha nivarthi at ADHI SETU (Sethukarai), where Lord Rama started the construction of the bridge to reach Lanka.' },
  { text: 'He is the disciple of T.P.L.S. Lakshmana Shastri, Thirupullani.' },
  { text: 'He also conducts auspicious functions like Ganapathi Homam, Thirumana Vaibhavam (Wedding), Punyahavachanam, Gruhapravesam, Kumbabhishekam etc.' },
  { text: `He is fluent in ${site.languages}.` }
]
</script>
