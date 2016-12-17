<script>
  import Vue from 'vue'
  import Vuex, {
    mapState
  } from 'vuex'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state, payload) {
        state.count += payload.num
      },
      decrement (state, payload) {
        state.count -= payload.num
      }
    },
    actions: {
      incrementAsync ({commit}, payload) {
        setTimeout(() => {
          // 异步回调中提交 mutation
          commit('increment', payload)
        }, 1000)
      },
      decrementAsync ({commit}, payload) {
        setTimeout(() => {
          // 异步回调中提交 mutation
          commit('decrement', payload)
        }, 1000)
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
      count: state => state.count,

      countAlias: 'count',

      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    methods: {
      incrementAsyncOne (payload) {
        this.$store.dispatch('incrementAsync', payload)
      },
      decrementAsyncOne (payload) {
        this.$store.dispatch('decrementAsync', payload)
      }
    }
  }
</script>

<template>
  <div>
    <p>count: {{ count }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
    <p>
      <button @click="incrementAsyncOne({num: 1})">+</button>
      <button @click="decrementAsyncOne({num: 1})">-</button>
    </p>
  </div>
</template>