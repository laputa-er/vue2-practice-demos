/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 18:43:36
 */
<script>
  export default {
    data () {
      return {
        items: [1, 2, 3]
      }
    },
    render (createElement) {
      if (this.items.length) {
        return createElement(
          'ul',
          this.items.map((item) => createElement('li', item))
        )
      } else {
        return createElement('p', 'No items found.')
      }
    }
  }
</script>

<!--
<template>
  <div>
    <ul v-if="items.length">
      <li v-for="item in items">{{ item }}</li>
    </ul>
    <p v-else>No items found.</p>
  </div>
</template>
 -->

