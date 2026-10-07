<template>
  <main><article>
  <div class="max-w-3xl mx-auto min-h-screen my-12">
    <div v-if="post">
      <h1 class="-ml-1 text-4xl font-semibold mb-2">{{ post.title }}</h1>
      <h5 class="italic font-extralight tracking-wide mb-2 text-justify">{{ post.description }}</h5>
      <nuxt-content :document="post" />
      <div class="mt-16">
        <nuxt-link to="/services/" class="hover:underline">Back to blog</nuxt-link>
      </div>
    </div>
  </div>
  </article>
  </main>
</template>

<script>
export default {
  data () {
    return {
      post: null
    }
  },
  async fetch () {
    // const fullPath = 'services/' + this.$route.params.slug
    const fullPath = 'services/' + this.articleName
    console.log('fdsfsd' + fullPath)
    this.post = await this.$content(fullPath).fetch()
  },
  props: ['articleName']
}
</script>
