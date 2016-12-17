<script>
  import Vue from 'vue'
  import Vuex, {
    mapState
  } from 'vuex'

  // mutaion 事件类型
  import {
    INCREMENT,
    DECREMENT
  } from './l97_vuex_mutations_count/mutation-types'

  // 应用 Vuex 插件
  Vue.use(Vuex)

  // 创建 store
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      [INCREMENT] (state, payload) {
        state.count += payload.num
      },
      [DECREMENT] (state, payload) {
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
      incrementOne () {
        // 当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数
        this.$store.commit({
          type: INCREMENT,
          num: 1
        })
      },
      decrementOne () {
        this.$store.commit({
          type: DECREMENT,
          num: 1
        })
      }
    }
  }
</script>

<template>
  <div>
    <p>count: {{ count }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
    <p>
      <button @click="incrementOne">+</button>
      <button @click="decrementOne">-</button>
    </p>
  </div>
</template>