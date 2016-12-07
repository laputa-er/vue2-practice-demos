/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-27 16:17:27
 * @version $Id$
 */

<script>
  export default {
    data () {
      return {
        message: 'Hello'
      }
    },
    computed: {
      // a computed getter
      reversedMessage: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>

<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>

<style scoped>
  
</style>