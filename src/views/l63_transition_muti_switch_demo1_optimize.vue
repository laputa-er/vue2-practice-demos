/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 16:40:29
 */
<script>
  export default {
    data () {
      return {
        isEditing: true
      }
    }
  }
</script>

<template>
  <transition>
    <button v-bind:key="isEditing">
      {{ isEditing ? 'Save' : 'Edit' }}
    </button>
  </transition>
</template>

