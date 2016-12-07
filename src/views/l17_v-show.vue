<script>
  export default {
    data () {
      return {
        isShow: true
      }
    }
  }
</script>

<template>
  <div v-show="isShow">始终渲染并保持在 DOM 中</div>
</template>