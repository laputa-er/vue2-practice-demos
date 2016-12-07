/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 14:54:33
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
  <div id="example-2">
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p v-if="show">Look at me!</p>
    </transition>
  </div>
</template>

<style scoped>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
