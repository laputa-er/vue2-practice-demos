/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 19:32:51
 */
<script>
  import Vue from 'vue'
  // 4种类型的 组件设置 对象
  const EmptyList = {
    template: '<div>EmptyList</div>'
  }
  const TableList = {
    template: '<div>TableList</div>'
  }
  const OrderedList = {
    template: '<div>OrdedList</div>'
  }
  const UnorderedList = {
    template: '<div>UnordedList</div>'
  }

  Vue.component('smart-list', {
    functional: true,
    /**
     * 渲染
     * @param  {func} createElement 创建 vnode 的函数
     * @param  {object} context 上下文（函数化组件不是vue实例，只能通过 context 获取自身的上下文信息）
     * @return {vnode}  组装好的的 vnode 对象
     */
    render (createElement, context) {
      function apprepriateListComponent () {
        let items = context.props.items
        if (items.length === 0) {
          return EmptyList
        }
        if (typeof items[0] === 'object') {
          return TableList
        }
        if (context.props.isOrdered) {
          return OrderedList
        }
        return UnorderedList
      }

      return createElement(
        apprepriateListComponent(),
        context.data,
        context.children
      )
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      isOrdered: Boolean
    }
  })

  export default {
    data () {
      return {
        orderedItems: [1, 2, 3, 4]
      }
    }
  }
</script>

<template>
  <div>
    <smart-list
      :isOrdered.boolean="true"
      :items="orderedItems"
    ></smart-list>
  </div>
</template>
