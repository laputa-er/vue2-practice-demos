/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-05 16:31:26
 */
<script>
  import Velocity from 'velocity-animate'
  export default {
    data () {
      return {
        show: true,
        fadeInDuration: 1000,
        fadeOutDuration: 1000,
        maxFadeDuration: 1500,
        stop: false
      }
    },
    mounted () {
      this.show = false
    },
    methods: {
      beforeEnter (el) {
        el.style.opacity = 0
      },
      enter (el, done) {
        Velocity(el,
          { opacity: 1 },
          {
            duration: this.fadeInDuration,
            complete: () => {
              done()
              // 进入过渡完成后，触发离开过渡
              if (!this.stop) this.show = false
            }
          }
        )
      },
      leave (el, done) {
        Velocity(el,
          { opacity: 0 },
          {
            duration: this.fadeOutDuration,
            complete: () => {
              done()
              // 离开过渡完成后，触发进入过渡
              this.show = true
            }
          }
        )
      }
    }
  }
</script>

<template>
  <div id="dynamic-fade-demo">
    Fade In: <input type="range" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration">
    Fade Out: <input type="range" v-model="fadeOutDuration" min="0" v-bind:max="maxFadeDuration">
    <transition
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <p v-if="show">hello</p>
    </transition>
    <button v-on:click="stop = true">Stop it!</button>
  </div>
</template>
