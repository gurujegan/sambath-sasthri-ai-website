<template>
  <PageContent class="services" id="services">
    <div class="item">
      <main class="w-full">
        <section class="space-y-4 divide-y">
          <article v-for="post of posts" :key="post.slug" class="pt-4">
            <div
              class="
                max-w-md
                mx-auto
                bg-yellow-500
                rounded-xl
                shadow-md
                overflow-hidden
                md:max-w-4xl
              "
            >
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img
                    class="h-48 w-full object-cover md:w-48"
                    :src="post.cardImageUrl"
                  />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm font-semibold">
                    <NuxtLink
                      class="
                        block
                        mt-1
                        text-lg
                        leading-tight
                        font-medium
                        hover:underline
                        text-white
                        underline
                      "
                      :to="`/${post.slug}/`"
                    >
                      {{ post.title }}
                    </NuxtLink>
                  </div>
                  <p class="mt-2">{{ post.description }}</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  </PageContent>
</template>

<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  async fetch () {
    this.posts = await this.$content('services').fetch()
  }
}
</script>
