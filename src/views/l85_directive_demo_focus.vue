/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 22:25:56
 */
<script>
  export default {
    data () {
      return {}
    },
    directives: {
      // v-focus： 页面加载后自动获得焦点
      focus: {
        // 当绑定元素插入到 DOM 中
        inserted (el) {
          el.focus()
        }
      }
    }
  }
</script>

<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>
