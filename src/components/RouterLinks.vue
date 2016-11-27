<script>
  import config from '../config/config'
  export default {
    data () {
      return {
        views: config.views.map((item, index, views) => `/views/${item}`)
      }
    }
  }
</script>

<template>
  <div>
    <router-link v-for="item in views" :to="item">{{ item }}</router-link>
  </div>
</template>

<style>
  
</style>
