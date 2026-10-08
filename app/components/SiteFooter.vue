<template>
  <footer class="border-t-4 border-gold-500/70 bg-kumkum-950 text-sandal-200">
    <div class="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
      <div>
        <SiteLogo />
        <p class="mt-4 max-w-sm text-sandal-300/90">
          Thila Homam, Pitru Dosha nivarthi and Vedic rituals at Thirupullani, Sethukarai &amp; Rameswaram
          for over two decades.
        </p>
        <a :href="site.phoneHref" class="btn-primary mt-6">
          <AppIcon name="phone" class="h-5 w-5" />
          Call {{ site.phone }}
        </a>
      </div>

      <div v-for="place in site.places" :key="place.label">
        <h2 class="font-display text-lg text-gold-300">{{ place.label }}</h2>
        <address class="mt-3 not-italic leading-7 text-sandal-300/90">
          <span v-for="line in place.lines" :key="line" class="block">{{ line }}</span>
        </address>
      </div>
    </div>

    <div class="border-t border-kumkum-800">
      <div class="container-page flex flex-col gap-3 py-5 text-sm text-sandal-300/70 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ year }} sambathsasthri.in · All rights reserved.</p>
        <nav aria-label="Footer">
          <ul class="flex flex-wrap gap-x-5 gap-y-1">
            <li v-for="item in site.nav" :key="item.to">
              <NuxtLink :to="item.to" class="hover:text-gold-300">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
