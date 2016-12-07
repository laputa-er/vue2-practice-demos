<script>
  export default {
    data () {
      return {}
    },
    components: {
      'child': {
        /* 使用 inline-template 时该部分 template 将会被覆盖 */
        template: `
          <div>定义组件时的部分</div>
        `
      }
    }
  }
</script>

<template>
  <child inline-template>
    <div>
      <p>There are compiled as the component's own template</p>
      <p>not parent's transclusion content.</p>
    </div>
  </child>
</template>