<template>
  <section class="relative overflow-hidden bg-kumkum-900 text-sandal-100">
    <!-- soft fire glow -->
    <div
      class="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-saffron-500/25 blur-3xl"
      aria-hidden="true"
    />
    <div class="container-page relative py-14 text-center sm:py-16">
      <h2 class="text-3xl text-sandal-50 sm:text-4xl">{{ title }}</h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-sandal-300">
        Speak directly with Sambath Shastri to fix an auspicious date. Food and accommodation are arranged
        for your family. We are here to help at any time, 24×7.
      </p>
      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a :href="site.phoneHref" class="btn-primary text-lg">
          <AppIcon name="phone" class="h-5 w-5" />
          Call {{ site.phone }}
        </a>
        <NuxtLink to="/contact/" class="btn-light">Contact details</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Plan your Thila Homam with us' }
})
</script>
