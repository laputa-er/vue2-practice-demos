<script>
  export default {
    data () {
      return {
        isA: true,
        isB: false,
        isC: true,

        classA: 'class-a',
        classB: 'class-b',
        classC: 'class-c'
      }
    }
  }
</script>

<template>
  <div>
    <!-- 基本使用 -->
    <div class="static" v-bind:class="[classA, classB]">基本使用</div>

    <!-- 三元表达式 -->
    <div class="static" v-bind:class="[isB ? classB : '', isA ? classA : '']">在数组中使用三元表达式</div>

    <!-- 在数组中使用对象 -->
    <div class="static" v-bind:class="[classA, {'class-b': isB, 'class-c': isC}]">在数组中使用对象比频繁使用三元表达式更简洁</div>
  </div>
</template>

<style lang="scss">
  .class-a:after {
    content: ':class-a';
  }
  .class-b:after {
    content: ':class-b';
  }
  .class-c:before {
    content: 'class-c:';
  }
  
</style>