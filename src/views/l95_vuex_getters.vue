<script>
  import Vue from 'vue'
  import Vuex, {
    mapState
  } from 'vuex'
  Vue.use(Vuex)

  const store = new Vuex.Store({
    state: {
      todos: [
        {
          id: 1,
          text: '还书',
          done: true
        },
        {
          id: 2,
          text: '健身',
          done: false
        }
      ]
    },
    getters: {
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      },
      doneTodoCount: (state, getters) => {
        return getters.doneTodos.length
      }
    }
  })
  export default {
    store,
    computed: {
      doneTodosCount () {
        return this.$store.getters.doneTodoCount
      },
      ...mapState(['todos'])
    }
  }
</script>

<template>
  <div>
      <h1>所有任务</h1>
      <div
        v-for="todo in todos"
        :class="{'done': todo.done}"
      >{{todo.text}}</div>
      <p>共完成 {{doneTodosCount}} 项</p>
     
  </div>
</template>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>