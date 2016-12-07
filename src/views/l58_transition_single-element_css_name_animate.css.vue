/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 15:11:24
 */
<script>
  import 'animate.css'
  export default {
    data () {
      return {
        show: true
      }
    }
  }
</script>

<template>
  <div id="example-3">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<style>

</style>
