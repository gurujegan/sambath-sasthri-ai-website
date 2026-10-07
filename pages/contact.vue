<template>
  <PageContent>
    <h5>&#x1f64f;<i> Form will take few nano seconds to load; please bear with us </i> &#x1f64f;</h5>
    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
    <iframe
      class="airtable-embed airtable-dynamic-height"
      src="https://airtable.com/embed/shrdhp7545kYQEnLe?backgroundColor=yellow"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="943"
      style="background: transparent; border: 1px solid #ccc"
    ></iframe>
  </PageContent>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content('hello').fetch()
    return {
      page
    }
  }
}
</script>
