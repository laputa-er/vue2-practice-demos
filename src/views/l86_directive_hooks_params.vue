/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 22:34:10
 */
<script>
  export default {
    data () {
      return {
        message: 'hello!'
      }
    },
    directives: {
      demo: {
        bind (el, binding, vnode) {
          const s = JSON.stringify
          el.innerHTML = `
            name:<em>${s(binding.name)}</em> <br>
            value:<em>${s(binding.value)}</em> <br>
            expression:<em>${s(binding.expression)}</em> <br>
            argument:<em>${s(binding.arg)}</em> <br>
            modifiers:<em>${s(binding.modifiers)}</em><br>
            vnode keys:<em>${Object.keys(vnode).join(', ')}</em>
          `
        }
      }
    }
  }
</script>

<template>
  <div id="hook-arguments-example" v-demo:hello.a.b="message"></div>
</template>

<style>
  em {
    color: red;
  }
</style>
