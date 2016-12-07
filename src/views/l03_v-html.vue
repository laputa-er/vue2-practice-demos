<script>
  export default {
    data () {
      return {
        rawHtml: '<button>被插入的内容都会被当做 HTML —— 数据绑定会被忽略。</button>'
      }
    }
  }
</script>

<template>
  <div>
    <div v-html="rawHtml"></div>
  </div>
</template>

<style>
  
</style>