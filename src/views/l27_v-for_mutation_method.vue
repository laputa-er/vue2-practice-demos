/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 12:20:38
 */
<script>
  export default {
    data () {
      return {
        items: [
          'push()',
          'pop()',
          'shift()',
          'unshift()',
          'splice()',
          'sort()',
          'reverse()'
        ]
      }
    }
  }
</script>

<template>
  <div>
    <div v-for="item in items">
      {{ item }}
    </div>
    <button @click="items.reverse()">reverse</button>
  </div>  
</template>

<style scoped>
  
</style>
