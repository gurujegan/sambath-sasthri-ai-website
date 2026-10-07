<script setup>
// Old URL scheme: the articles now live at the site root, e.g. /thila-homam/
const route = useRoute()
await navigateTo(`/${route.params.slug}/`, { redirectCode: 301 })
</script>
