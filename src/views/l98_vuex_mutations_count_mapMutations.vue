<script>
  import Vue from 'vue'
  import Vuex, {
    mapState,
    mapMutations
  } from 'vuex'

  // 应用 Vuex 插件
  Vue.use(Vuex)

  // 创建 store
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    // mutation 都是同步事务!
    mutations: {
      increment (state, payload) {
        state.count += payload.num
      },
      decrement (state, payload) {
        state.count -= payload.num
      }
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
      ...mapMutations([
        // 映射 this.increment() 为 this.$store.commit('increment')
        'increment',
        'decrement'
      ])
    }
  }
</script>

<template>
  <div>
    <p>count: {{ count }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
    <p>
      <button @click="increment({num: 1})">+</button>
      <button @click="decrement({num: 1})">-</button>
    </p>
  </div>
</template>