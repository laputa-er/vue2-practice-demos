<script>
  export default {
    data () {
      return {
        items: [
          {message: 'foo'},
          {message: 'Bar'}
        ]
      }
    }
  }
</script>

<template>
  <div>
    <div v-for="item of items">{{item.message}}</div>
  </div>
</template>

<style scoped>
  
</style>