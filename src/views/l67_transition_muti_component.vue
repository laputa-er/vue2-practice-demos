/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 22:19:39
 */
<script>
  export default {
    data () {
      return {
        view: 'v-a'
      }
    },
    components: {
      'v-a': {
        template: '<div>Component A</div>'
      },
      'v-b': {
        template: '<div>Component B</div>'
      }
    }
  }
</script>

<template>
  <div>
    <input type="radio" id="one" value="v-a" v-model="view">
    <label for="one">A</label>
    <input type="radio" id="two" value="v-b" v-model="view">
    <label for="two">B</label>

    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>

<style scoped>
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-active {
    opacity: 0;
  }
</style>
