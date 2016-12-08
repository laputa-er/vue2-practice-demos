/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-08 13:02:24
 */
<script>
  // 定义 mixin
  let mixinObj = {
    methods: {
      foo () {
        this.rawHtml += '<div>foo from mixin</div>'
      },
      bar () {
        this.rawHtml += '<div>bar from mixin</div>'
      }
    }
  }
  export default {
    mixins: [mixinObj],
    data () {
      return {
        rawHtml: ''
      }
    },
    methods: {
      // 优先级高于 mixin 中的 bar
      bar () {
        this.rawHtml += '<div>bar from component</div>'
      }
    },
    created: function () {
      // 调用 mixin 混合进来的方法
      this.foo()

      // 调用组件自己的方法
      this.bar()
    }
  }
</script>

<template>
  <div v-html="rawHtml"></div>
</template>