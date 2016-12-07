/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 20:49:02
 */
<script type="text/x-template" id="hello-world-template">
  <p>Hello hello hello</p>
</script>
<script>
  export default {
    data () {
      return {}
    },
    components: {
      child: {
        template: '#hello-world-template'
      }
    }
  }
</script>

<template>
  <div>
    <child></child>
  </div>
</template>
