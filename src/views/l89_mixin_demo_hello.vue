/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-08 12:15:25
 */
<script>
  // 定义一个混合对象
  let myMixin = {
    created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log(this)
        this.htmlStr = [
          '<h1>混合</h1>',
          '<h3>基础</h3>',
          '通过 mixin 展现的信息'
        ].join('')
      }
    }
  }

  export default {
    data () {
      return {
        htmlStr: ''
      }
    },
    mixins: [myMixin]
  }
</script>

<template>
  <div v-html="htmlStr"></div>
</template>