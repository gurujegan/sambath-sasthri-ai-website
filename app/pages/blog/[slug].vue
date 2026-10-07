<template>
  <BlogArticle :article-name="route.params.slug" />
</template>

<script setup>
const route = useRoute()
</script>
