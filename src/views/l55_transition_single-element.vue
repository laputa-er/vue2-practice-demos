/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-02 17:38:48
 */
<script>
  export default {
    data () {
      return {
        show: true
      }
    }
  }
</script>

<template>
  <div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<style scoped>
  /* 进入过渡 结束、离开过渡 结束 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  /* 进入过渡 开始 */
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
