/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 20:34:39
 */
<script>
  export default {
    data () {
      return {
        isOn: true
      }
    },
    methods: {
      troggle () {
        this.isOn = !this.isOn
      }
    }
  }
</script>

<template>
  <transition
    name="move"
    mode="out-in"
    >
    <button
      :key="isOn ? 'on' : 'off'"
      @click="troggle()"
    >
      {{ isOn ? 'on' : 'off' }}
    </button>
  </transition>
</template>

<style scoped>
  .move-enter-active,
  .move-leave-active {
    transition: all .5s;
  }
  .move-enter {
    transform: translateX(20px);
    opacity: 0;
  }
  .move-leave-active {
    transform: translateX(-20px);
    opacity: 0;
  }
</style>
