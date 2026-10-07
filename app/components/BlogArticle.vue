<template>
  <main><article>
  <div class="max-w-3xl mx-auto min-h-screen my-12">
    <div v-if="post">
      <h1 class="-ml-1 text-4xl font-semibold mb-2">{{ post.title }}</h1>
      <h5 class="italic font-extralight tracking-wide mb-2 text-justify">{{ post.description }}</h5>
      <ContentRenderer :value="post" />
      <div class="mt-16">
        <NuxtLink to="/services/" class="hover:underline">Back to blog</NuxtLink>
      </div>
    </div>
  </div>
  </article>
  </main>
</template>

<script setup>
const props = defineProps(['articleName'])

const { data: post } = await useAsyncData(`services-${props.articleName}`, () =>
  queryCollection('services').path(`/services/${props.articleName}`).first()
)
</script>
