<template>
  <figure class="not-prose my-8 flow-root">
    <img
      :src="imgsrc"
      :alt="imgalttext"
      :width="width"
      :height="height"
      class="mb-4 rounded-xl shadow-md ring-1 ring-sandal-300 md:mb-2"
      :class="{ 'md:float-left md:mr-6 md:max-w-[45%]': !isFullWidth }"
      loading="lazy"
    >
    <div v-if="$slots.default" class="prose prose-lg prose-temple max-w-none">
      <slot mdc-unwrap="p" />
    </div>
  </figure>
</template>

<script setup>
const props = defineProps(['imgsrc', 'imgalttext', 'width', 'height'])

const isFullWidth = computed(() => String(props.width).endsWith('%'))
</script>
