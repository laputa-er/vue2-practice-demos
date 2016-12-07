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
          {message: 'Bar'},
          {message: 'Book'},
          {message: 'TV'}
        ]
      }
    },
    methods: {
      changeLength () {
        this.items.splice(2)
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
    <button @click="changeLength">数组长度改为2</button>
  </div>
</template>
