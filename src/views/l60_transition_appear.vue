/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 15:44:44
 */
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      customBeforeAppearHook () {
        console.log('before appear')
      },
      customAppearHook () {
        console.log('appear')
      },
      customAfterAppearHook () {
        console.log('after appear')
      }
    }
  }
</script>

<template>
  <div>
    <transition
      appear
      v-on:before-appear="customBeforeAppearHook"
      v-on:appear="customAppearHook"
      v-on:after-appear="customAfterAppearHook"
    >
      <p>为渲染节点的过程添加过渡效果</p>
    </transition>
  </div>
</template>

<style scoped>
 .appear-class {
    color: red;
 }
 .appear-active-class {
    color: green;
 }
</style>
