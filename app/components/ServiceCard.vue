<template>
  <NuxtLink :to="to" class="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
    <div class="relative aspect-[4/3] overflow-hidden bg-sandal-200">
      <img
        :src="image"
        :alt="imageAlt || title"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      >
      <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-500" />
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-2xl">{{ title }}</h3>
      <p v-if="titleTa" lang="ta" class="mt-1 text-saffron-700">{{ titleTa }}</p>
      <p v-if="description" class="mt-3 line-clamp-4 flex-1 text-ink-muted">{{ description }}</p>
      <span class="mt-5 inline-flex items-center gap-2 font-semibold text-kumkum-700">
        Know more
        <AppIcon name="arrow" class="h-5 w-5 transition group-hover:translate-x-1" />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  title: { type: String, required: true },
  titleTa: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' }
})
</script>
