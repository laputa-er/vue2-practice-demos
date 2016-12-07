/**
 * 
 * @authors mengqingshen (eli01linux@aliyun.com)
 * @date    2016-11-27 16:09:37
 */

<script>
  export default {
    data () {
      return {
        message: '0123456789'
      }
    }
  }
</script>

<template>
  <div>
    {{ message.split('').reverse().join('') }}
  </div>
</template>

<style scoped>
  
</style>