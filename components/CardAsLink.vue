<template>
  <NuxtLink :to="articleUrl" class="card-as-link">
    <div
      class="
        card
        p-4
        mx-auto
        img-fluid
        rounded
        shadow-lg
        space-x-4
        text-ellipsis
        overflow-hidden
      "
    >
      <img :src="imgsrc" class="w-20 h-20 bg-white" :alt="iconName"/>
      <div class="card-body-custom mt-4">
        <slot> </slot>
        <!-- <h5 class="card-title text-black">Card title</h5>
    <p class="card-text text-black leading-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        <a :href="articleUrl"
        class="btn btn-primary bg-rose-900"
          >To Know More</a
        >
      </div>
    </div>
  </NuxtLink>
</template>

<style>
.card-body-custom {
  margin-left: 0 !important;
}

.card-as-link:hover .card-title {
  text-decoration: underline;
}

.card {
  background: blanchedalmond;
  color: #713f12;
}
</style>

<script>
export default {
  data () {
    return {
      imgsrc: '',
      articleUrl: ''
    }
  },
  created () {
    this.imgsrc = '/media/icons/' + this.iconName + '.png'
    this.getArticleName()
  },
  methods: {
    getArticleName () {
      const FWD_SLASH = '/'
      this.articleUrl = FWD_SLASH + this.articleName + FWD_SLASH
    }
  },
  props: ['articleName', 'iconName']
}
</script>
