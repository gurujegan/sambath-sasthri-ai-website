<template>
<div class="">
  <figure class="figure">
    <img
      :src="imgsrc"
      class="
        figure-img
        rounded
        mb-3
        mr-3
        object-contain object-top
        md:float-left
        img-fluid
      "
      :alt="imgalttext"
      :width="width"
      :height="height"
    />
    <!-- <figcaption class="figure-caption">
      {{ imgalttext }}
    </figcaption> -->
        <p class="leading-loose"><slot></slot></p>
  </figure>
  </div>
</template>

<script>
export default {
  props: ['imgsrc','imgalttext','width','height']
}
</script>
