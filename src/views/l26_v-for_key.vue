/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 12:10:01
 */
<script>
  export default {
    data () {
      return {
        items: [
          {
            id: '1001',
            name: 'John'
          },
          {
            id: '1002',
            name: 'Andrew'
          },
          {
            id: '1003',
            name: 'Salina'
          },
          {
            id: '1004',
            name: 'Beken'
          }
        ]
      }
    }
  }
</script>

<template>
  <div>
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>  
  </div>
</template>

