/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-27 22:53:16
 * @version $Id$
 */

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
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>
