<script>
  import Vue from 'vue'
  import Vuex, {
    mapState
  } from 'vuex'

  // 应用 Vuex 插件
  Vue.use(Vuex)

  // 创建 store
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
  })

  export default {
    data () {
      return {
        localCount: 10
      }
    },
    store,
    computed: mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<template>
  <div>
    <p>count: {{ count }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>