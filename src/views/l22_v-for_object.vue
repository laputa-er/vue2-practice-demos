/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-28 11:10:52
 */
<script>
  export default {
    data () {
      return {
        object: {
          FirstName: 'John',
          LastName: 'Doe',
          Age: 30
        }
      }
    }
  }
</script>

<template>
  <div>
    <ul id="repeat-object" class="demo">
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  
</style>