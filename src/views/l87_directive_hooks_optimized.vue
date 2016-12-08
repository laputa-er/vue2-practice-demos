/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 22:46:27
 */
<script>
  export default {
    data () {
      return {}
    },
    directives: {
      // 相当于合并了 bind 和 update 两个钩子，并且不想关心其它的钩子函数
      'color-swatch': function (el, binding) {
        el.style.backgroundColor = binding.value
      }
    }
  }
</script>

<template>
  <div>
    <span v-color-swatch="'#ff0000'">背景色是红色</span>
  </div>
</template>
