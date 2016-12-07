<script>
  export default {
    components: {
      // 在模版中写作 <text-box>
      'TextBox': {
        template: `<div>组件名为PascalCase式的，按照&lt;pascal-case&gt;方式使用</div>`
      },
      // 在模版中写作 <dropdown-menu>
      'dropdownMenu': {
        template: `<div>组件名为camelCase式的，按照&lt;camel-case&gt;方式使用</div>`
      }
    }
  }
</script>

<template>
  <div>
    <h3>资源命名约定</h3>

    <!-- 组件 TextBox -->
    <text-box></text-box>

    <!-- 组件 dropdownMenu -->
    <dropdown-menu></dropdown-menu>    
  </div>
</template>