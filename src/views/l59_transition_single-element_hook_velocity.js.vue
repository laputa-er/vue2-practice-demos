/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 15:18:48
 */
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script> -->

<script>
  import Velocity from 'velocity-animate'
  export default {
    data () {
      return {
        show: true
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      }
    }
  }
</script>

<template>
  <div id="example-4">
    <button @click="show = !show">
      Toggle
    </button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <p v-if="show">
        Demo
      </p>
    </transition>
  </div>
</template>

<style scoped>
  
</style>
