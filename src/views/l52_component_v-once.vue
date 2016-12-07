/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 20:57:20
 */
<script>
  export default {
    data () {
      return {}
    },
    components: {
      'cheap-static-component': {
        template: `
            <div v-once>
              <h1>Terms of Service</h1>
              ... a lot of static content ...
            </div>
          `
      }
    }
  }
</script>

<template>
  <cheap-static-component></cheap-static-component>
</template>
