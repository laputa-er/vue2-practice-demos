<script>
  import config from '../config/config'
  export default {
    data () {
      return {
        views: config.views
      }
    }
  }
</script>

<template>
  <div id="links">
    <router-link
      v-for="(item, index) in views"
      :to="{name: item}"
      :key="index">{{ item }}</router-link>
  </div>
</template>

<style scoped lang="sass">
  #links
    a
      padding-left: 10px;
      font-size: 12px;
      display: block;
</style>
