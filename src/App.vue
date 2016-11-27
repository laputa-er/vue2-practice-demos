<template>
  <div>
      <h1>vue2 功能 demos</h1>
      <RouterLinks></RouterLinks>
      <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import RouterLinks from './components/RouterLinks'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Hello,
    RouterLinks
  }
}
</script>

<style scoped>
  @import './styles/common.css';
</style>
