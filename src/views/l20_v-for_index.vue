/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-27 22:56:45
 * @version $Id$
 */

<script>
  export default {
    data () {
      return {
        parentMessage: 'Parent',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    }
  }
</script>

<template>
  <div>
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  
</style>