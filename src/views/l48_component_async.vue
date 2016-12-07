<script>
  export default {
    components: {
      'child': function (resolve, reject) {
        setTimeout(function () {
          resolve({
            template: '<div>I am async.</div>'
          })
        }, 2000)
      }
    }
  }
</script>

<template>
  <div>
    <h1>组件</h1>
    <h3># 异步组件</h3>
    <!-- 2 s 后这个组件才会被渲染 -->
    <child></child>
  </div>
</template>