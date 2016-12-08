/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-08 12:59:14
 */
<script>
  // 定义 mixin
  var mixin = {
    // 由于和组件的 created 钩子同名，该方法会在组件自己的钩子之前被调用
    created: function () {
      this.rawHtml += '<div>混合提供的钩子被调用</div>'
    }
  }
  export default {
    data () {
      return {
        rawHtml: ''
      }
    },
    mixins: [mixin],
    created: function () {
      this.rawHtml += '<div>组件自身的钩子被调用</div>'
    }
  }
</script>

<template>
  <div v-html="rawHtml"></div>
</template>