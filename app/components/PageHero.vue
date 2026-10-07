<template>
  <section class="bg-kolam border-b border-sandal-300/70">
    <div class="container-page py-12 text-center sm:py-16">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="mt-3 text-4xl sm:text-5xl">{{ title }}</h1>
      <p v-if="titleTa" lang="ta" class="mt-3 text-lg text-saffron-700 sm:text-xl">{{ titleTa }}</p>
      <OrnamentDivider class="mt-6" />
      <p v-if="lead" class="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">{{ lead }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  titleTa: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  lead: { type: String, default: '' }
})
</script>
