<script>
  export default {
    data () {
      return {
        items: [
          {phone: 'nokia'},
          {phone: 'leshi'},
          {phone: 'iphone'}
        ]
      }
    },
    components: {
      'child': {
        template: '<div>{{index}}:{{item.phone}}</div>',
        props: ['item', 'index']
      }
    },
    methods: {
      consoleChilds () {
        console.log(this.$refs.childs)
      }
    }
  }
</script>

<template>
  <div>
    <h1>杂项</h1>
    <h3># 组件和 v-for</h3>
    <p>使用 props 才能传递数据给组件</p>
    <child
        v-for="(item, $index) in items"
        ref="childs"
        :item="item"
        :index="$index"></child>
    <button @click="consoleChilds">consoleChilds</button>
  </div>
</template>