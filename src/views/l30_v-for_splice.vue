/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 13:52:28
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
    },
    methods: {
      setFirstMessage: function () {
        this.items.splice(0, 1, {message: '新数据'})
      }
    }
  }
</script>

<template>
  <div>
    <h2>等价 l29</h2>
    <div v-for="item in items">
      {{ item.message }}
    </div>
    <button v-on:click = "setFirstMessage">设置数组第一个元素</button>
  </div>
</template>

<style scoped lang="scss">
  h2 {
    margin: 20px;
  }
</style>

