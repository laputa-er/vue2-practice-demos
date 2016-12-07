/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-05 15:56:18
 */
<script>
  import Velocity from 'velocity-animate'
  export default {
    data () {
      return {
        query: '',
        list: [
          { msg: 'Bruce Lee' },
          { msg: 'Jackie Chan' },
          { msg: 'Chuck Norris' },
          { msg: 'Jet Li' },
          { msg: 'Kung Fury' }
        ]
      }
    },
    computed: {
      computedList () {
        return this.list.filter(item => {
          return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
        })
      }
    },
    methods: {
      beforeEnter (el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter (el, done) {
        const delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 1, height: '1.6em' },
            { complete: done }
          )
        }, delay)
      },
      leave (el, done) {
        const delay = el.dataset.index * 150
        setTimeout(() => {
          Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
          )
        }, delay)
      }
    }
  }
</script>

<template>
  <div id="staggered-list-demo">
    <input v-model="query">
    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <li
        v-for="(item, index) in computedList"
        v-bind:key="item.msg"
        v-bind:data-index="index"
      >{{ item.msg }}</li>
    </transition-group>
  </div>
</template>