<script>
  export default {
    data () {
      return {
        someData: 123
      }
    },
    created () {
      // 1. 更新数据
      this.someData = 456

      // 2. 数据变化之后等待Vue.js完成更新 DOM 后再手动操作 DOM
      this.$nextTick(() => {
        this.$el.querySelector('#example').textContent = 789
      })// 或者 Vue.nextTick
    }
  }
</script>

<template>
  <div>
    <div>数据变化之后等待Vue.js完成更新 DOM 后再手动操作 DOM: <span id="example">{{someData}}</span></div>  
  </div>
</template>