/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-05 16:10:19
 */
<script>
  import Vue from 'vue'
  Vue.component('my-special-transition', {
    functional: true,
    render (createElement, context) {
      const data = {
        props: {
          name: 'very-special-transition',
          mode: 'out-in'
        },
        on: {
          beforeEnter (el) {
            console.log('my-special-transition before enter')
          },
          afterEnter (el) {
            console.log('my-special-transition after enter')
          }
        }
      }
      return createElement('transition', data, context.children)
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
      <div>my-special-transition by render</div>
    </my-special-transition>
  </div>
</template>
