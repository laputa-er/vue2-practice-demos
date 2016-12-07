<script>
  export default {
    components: {
      'my-component': {
        template: `
          <div>
            <h1>This is my component!</h1>
            <slot>
              如果没有分发内容则显示我。
            </slot>
          </div>`
      }
    }
  }
</script>

<template>
  <div>
    <h1>I'm the parent title</h1>
    <my-component>
      <p>This is some original content</p>
      <p>This is some more original content</p>
    </my-component>
  </div>
</template>