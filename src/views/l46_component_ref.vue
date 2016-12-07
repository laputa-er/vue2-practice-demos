<script>
  export default {
    methods: {
      consoleProfile () {
        console.log(this.$refs.profile)
      }
    },
    components: {
      'user-profile': {
        template: `
          <div>子组件</div>
        `
      }
    }
  }
</script>

<template>
  <div id="parent">
    <user-profile ref="profile"></user-profile>
    <button @click="consoleProfile">consoleProfile</button>
  </div>
</template>