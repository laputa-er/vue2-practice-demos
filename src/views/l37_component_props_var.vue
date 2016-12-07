/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 17:22:21
 */
<script>
  export default {
    data () {
      return {
        parentMsg: ''
      }
    },
    components: {
      'child': {
        props: ['myMessage'],
        template: '<span>{{ myMessage }}</span>'
      }
    }
  }
</script>

<template>
  <div>
    <input v-model="parentMsg">
    <br>
    <child v-bind:my-message="parentMsg"></child>
    <!-- <child :my-message="parentMsg"></child> -->
  </div>
</template>

<style scoped>
  
</style>
