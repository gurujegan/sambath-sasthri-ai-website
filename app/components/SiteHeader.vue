<template>
  <header class="sticky top-0 z-40 border-b-2 border-gold-500/60 bg-kumkum-900/95 shadow-lg backdrop-blur">
    <div class="container-page flex h-20 items-center justify-between gap-4">
      <SiteLogo />

      <nav class="hidden lg:block" aria-label="Main">
        <ul class="flex items-center gap-1">
          <li v-for="item in site.nav" :key="item.to">
            <NuxtLink :to="item.to" class="nav-link">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <a :href="site.phoneHref" class="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
          <AppIcon name="phone" class="h-5 w-5" />
          {{ site.phone }}
        </a>
        <a
          :href="site.phoneHref"
          class="grid h-11 w-11 place-items-center rounded-full bg-saffron-600 text-white sm:hidden"
          aria-label="Call Sambath Sasthri"
        >
          <AppIcon name="phone" class="h-5 w-5" />
        </a>
        <button
          type="button"
          class="grid h-11 w-11 place-items-center rounded-full text-sandal-100 ring-1 ring-gold-400/50 lg:hidden"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" class="h-6 w-6" />
        </button>
      </div>
    </div>

    <nav
      v-show="open"
      id="mobile-nav"
      class="border-t border-gold-500/30 bg-kumkum-900 lg:hidden"
      aria-label="Main"
    >
      <ul class="container-page divide-y divide-kumkum-700/60 py-2">
        <li v-for="item in site.nav" :key="item.to">
          <NuxtLink :to="item.to" class="mobile-link">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const open = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  open.value = false
})
</script>

<style scoped>
.nav-link {
  @apply relative rounded-full px-4 py-2 font-medium text-sandal-100 transition-colors hover:text-gold-300;
}

.nav-link.nuxt-link-exact-active {
  @apply text-gold-300;
}

.nav-link.nuxt-link-exact-active::after {
  content: '';
  @apply absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-saffron-400;
}

.mobile-link {
  @apply block py-3.5 text-lg font-medium text-sandal-100;
}

.mobile-link.nuxt-link-exact-active {
  @apply text-gold-300;
}
</style>
