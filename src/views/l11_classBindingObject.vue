<script>
  export default {
    data () {
      return {
        /* 对象放在 view */
        isA: true,
        isB: false,

        /* 对象放在 model */
        classObject: {
          'class-a': true,
          'class-b': false
        }
      }
    }
  }
</script>

<template>
  <div>
    <div class="static" v-bind:class="{'class-a': isA, 'class-b': isB}">对象放在 view</div>

    <div class="static" v-bind:class="classObject">对象放在 model</div>
  </div>
</template>

<style lang="scss">
  .class-a:after {
    content: ':class-a';
  }
  .class-b:after {
    content: ':class-b';
  }
  
</style>