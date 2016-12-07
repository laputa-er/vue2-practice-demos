/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 16:33:46
 */
<script>
  export default {
    data () {
      return {
        items: [
          '生命科学园',
          '永旺家园',
          '百度科技园'
        ]
      }
    }
  }
</script>

<template>
  <div>
    <transition>
      <ul v-if="items.length > 0">
        <li v-for="item in items">
          {{ item }}
        </li>
      </ul>
      <p v-else>Sorry, no items found.</p>
    </transition>  
  </div>
</template>

