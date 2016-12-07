<script>
  import Vue from 'Vue'
  export default {
    data () {
      return {
        data1: '数据1',
        data2: '数据2',
        obj1: {
          a: 1
        }
      }
    },
    created () {
      setTimeout(() => {
        /* 向本来就响应的对象添加属性 */
        Vue.set(this.obj1, 'b', 2)

        /* 批量添加属性 */
        this.obj1 = Object.assign({}, this.obj1, {c: 3})
      }, 2000)
    }
  }
</script>

<template>
  <div>
    <h1>深入响应原理</h1>
    <h3>变化检测问题</h3>
    
    <hr>
    <h4>将响应属性添加到嵌套的对象上</h4>
    <div>
      obj1.b:{{ obj1.b }}
    </div>

    <hr>
    <h4>向已有对象添加属性并立即触发更新</h4>

    <div v-if="obj1.c === 3">obj1.c:{{obj1.c}}</div>
  </div>
</template>