/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 11:54:24
 */
<script>
  export default {
    data () {
      return {
        object: {
          FirstName: 'John',
          LastName: 'Doe',
          Age: 30
        }
      }
    }
  }
</script>

<template>
  <div>
    <div v-for="(value, key, index) in object">
      {{ index }}. {{ key }} : {{ value }}
    </div>
  </div>
</template>

<style scoped>
  
</style>
