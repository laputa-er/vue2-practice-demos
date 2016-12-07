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
          <div>
            <div>home 组件</div>
            <span>{{time}}</span>
          </div>
        `,
        data () {
          return {
            time: Date.now()
          }
        }
      },
      posts: {
        template: `
          <div>
            <div>posts 组件</div>
            <span>{{time}}</span>
          </div>
        `,
        data () {
          return {
            time: Date.now()
          }
        }
      },
      archive: {
        template: `
          <div>
            <div>archive 组件</div>
            <span>{{time}}</span>
          </div>
        `,
        data () {
          return {
            time: Date.now()
          }
        }
      }
    }
  }
</script>

<template>
  <div>
    <h1>动态组件</h1>
    <h3># keep-alive</h3>
    <input v-model="currentView"/>
    <!-- 切换后会保留在内存，下次切换回来不会重新渲染 -->
    <keep-alive>
      <component :is="currentView">
        <!-- 组件在 currentView 变化时变化 -->
      </component>
    </keep-alive>
  </div>
</template>