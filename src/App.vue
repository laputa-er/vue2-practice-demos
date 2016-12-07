<template>
  <div>
      <MyTitle id="header"></MyTitle>
      <nav id="sidebar">
        <RouterLinks></RouterLinks>
      </nav>
      <div class="content">  
        <h2>Content</h2>
        <router-view></router-view>
      </div>

  </div>
</template>

<script>
import RouterLinks from './components/RouterLinks'
import MyTitle from './components/Header'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    RouterLinks,
    MyTitle
  }
}
</script>

<style scoped lang="sass">
  // @import './styles/common.css';
  #header
    position: fixed;
    top: 10px;
    left: 36px;
  #sidebar
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 10px;
    width: 260px;
    margin-right: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid gray;
    margin-left: 40px;
  h1
    text-align: center;
    margin: 20px;
  h2
    margin: 10px;
  .content
    position: fixed;
    top: 50px;
    left: 310px;
    bottom: 10px;
    border: 1px solid #5e5e5e;
    padding: 20px;
    overflow: auto;
</style>
