/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 12:02:55
 */
<script>
  export default {
    props: ['title']
  }
</script>

<template>
  <li>
    {{ title }}
    <button v-on:click="$emit('remove')">X</button>
  </li>
</template>

