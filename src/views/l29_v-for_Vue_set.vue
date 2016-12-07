/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 13:52:28
 */
<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
        items: [
          {message: 'foo'},
          {message: 'Bar'}
        ]
      }
    },
    methods: {
      setFirstMessage: function () {
        Vue.set(this.items, 0, {message: '新数据'})
      }
    }
  }
</script>

<template>
  <div>
    <div v-for="item in items">
      {{ item.message }}
    </div>
    <button v-on:click = "setFirstMessage">设置数组第一个元素</button>
  </div>
</template>

