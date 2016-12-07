<script>
  export default {
    data () {
      return {
        styleObjectA: {
          color: 'red'
        },
        styleObjectB: {
          fontSize: '30px'
        }
      }
    }
  }
</script>

<template>
  <div v-bind:style="[styleObjectA, styleObjectB]">多个样式对象应用到同一个元素</div>
</template>
