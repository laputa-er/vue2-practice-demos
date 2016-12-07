/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 18:37:58
 */
<script>
  import Vue from 'Vue'
  
  export default {
    data () {
      return {
        // 在简单的场景下，使用一个空的 Vue 实例作为中央事件总线
        bus: new Vue()
      }
    },
    components: {
      'child1': {
        template: `
          <div>child1</div>
        `,
        props: ['bus'],
        created () {
          this.bus.$on('id-selected', id => {
            window.alert('I am child1.' + id + ' is received!')
          })
        }
      },
      'child2': {
        template: `
          <div>
            <div>child2</div>
            <button @click="callChild1">call child1</button>
          </div>
        `,
        props: ['bus'],
        methods: {
          callChild1 () {
            this.bus.$emit('id-selected', 1)
          }
        }
      }
    }
  }
</script>

<template>
  <div>
    <child1 :bus="bus"></child1>
    <child2 :bus="bus"></child2>
  </div>
</template>

<style scoped>
  
</style>
