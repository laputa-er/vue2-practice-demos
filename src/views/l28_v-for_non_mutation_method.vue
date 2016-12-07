/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 12:20:38
 */
<script>
  export default {
    data () {
      return {
        items: [
          'filter()',
          'concat()',
          'slice()',
          'map()'
        ]
      }
    },
    methods: {
      removeParentheses () {
        this.items = this.items.map((item) => {
          return item.slice(0, -2)
        })
      }
    }
  }
</script>

<template>
  <div>
    <div v-for="item in items">
      {{ item }}
    </div>
    <button @click="removeParentheses">remove "()"</button>
  </div>  
</template>

