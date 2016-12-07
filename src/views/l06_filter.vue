/**
 * 
 * @authors sean (eli01linux@aliyun.com)
 * @date    2016-11-27 16:13:01
 */
<script>
  export default {
    data () {
      return {
        message: 'laputa'
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<template>
  <div>
    {{ message | capitalize }}
  </div>
</template>

<style scoped>
  
</style>