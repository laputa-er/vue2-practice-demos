/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-05 16:10:19
 */
<script>
  import Vue from 'vue'
  Vue.component('my-special-transition', {
    template: `
      <transition
        name="very-special-transition"
        mode="out-in"
        v-on:before-enter="beforeEnter"
        v-on:after-enter="afterEnter"
      >
        <slot></slot>
      </transition>
    `,
    methods: {
      beforeEnter: function (el) {
        console.log('my-special-transition before enter')
      },
      afterEnter: function (el) {
        console.log('my-special-transition after enter')
      }
    }
  })

  export default {
    data () {
      return {}
    }
  }
</script>

<template>
  <div>
    <my-special-transition>
      <div>my-special-transition by template</div>
    </my-special-transition>
  </div>
</template>
