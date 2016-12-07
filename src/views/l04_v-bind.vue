<script>
  export default {
    data () {
      return {
        dynamicId: '10',
        someDynamicCondition: false
      }
    }
  }
</script>

<template>
  <div>
    <p>Mustache 不能在 HTML 属性中使用，应使用 v-bind 指令.</p>
    <div v-bind:id="dynamicId">dynamicId</div>
    <button v-bind:disabled="someDynamicCondition">Button</button>
  </div>
</template>

<style scoped>
  
</style>
