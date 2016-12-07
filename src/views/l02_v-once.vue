<script>
  export default {
    data () {
      return {
        msg: 'I am immortal!'
      }
    },
    created () {
      setTimeout(() => {
        this.msg = 'Go to Die!'
      }, 2000)
    }
  }
</script>

<template>
  <span v-once>This will never change: {{ msg }}</span>
</template>

<style scoped>
  
</style>