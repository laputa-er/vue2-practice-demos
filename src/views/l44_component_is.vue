<script>
  export default {
    data () {
      return {
        currentView: 'home'
      }
    },
    components: {
      home: {
        template: `
          <div>home 组件</div>
        `
      },
      posts: {
        template: `
          <div>posts 组件</div>
        `
      },
      archive: {
        template: `
          <div>archive 组件</div>
        `
      }
    }
  }
</script>

<template>
  <div>
    <h1>动态组件</h1>
    <input v-model="currentView">
    <component :is="currentView">
      <!-- 组件在 currentView 变化时变化 -->
    </component>
  </div>
</template>