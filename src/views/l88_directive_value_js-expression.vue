/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-08 11:47:35
 */
<script>
  export default {
    data () {
      return {}
    },
    directives: {
      demo (el, binding) {
        console.log(binding.value)
        el.style.color = binding.value.color
        el.innerHTML = binding.value.text
      }
    }
  }
</script>

<template>
  <div v-demo="{color: 'green', text:'hello'}"></div>
</template>
