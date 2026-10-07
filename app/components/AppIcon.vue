<template>
  <!-- eslint-disable vue/no-v-html -- static, trusted icon markup -->
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="paths[name]"
  />
</template>

<script setup>
defineProps({
  name: { type: String, required: true }
})

// Small inline icon set (replaces the Font Awesome CDN)
const paths = {
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  flame: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.8 2.5-5 .3 1.6 1 2.5 2 3 0-3 .5-5.5.5-8z"/>',
  home: '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
  route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7"/>',
  language: '<path d="M4 5h8M8 3v2m2.5 0c-.8 4-3.4 7.3-6.5 9m2.5-5c1 2 2.6 3.6 4.5 4.5"/><path d="M12 21l4.5-10L21 21m-7.5-3h6"/>',
  years: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>',
  lotus: '<path d="M12 19c-4 0-7-2.5-8-6 2.5 0 4.6.8 6 2.3M12 19c4 0 7-2.5 8-6-2.5 0-4.6.8-6 2.3M12 19c-2-2-3-4.3-3-7 0-2.5 1.2-5 3-7 1.8 2 3 4.5 3 7 0 2.7-1 5-3 7z"/>'
}
</script>
