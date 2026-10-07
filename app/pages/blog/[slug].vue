<template>
<PageContent>
  <BlogArticle :article-name="route.params.slug" />
</PageContent>
</template>

<script setup>
const route = useRoute()
</script>
