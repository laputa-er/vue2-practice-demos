/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 16:38:04
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
    <button v-if="isEditing" key="save">
      Save
    </button>
    <button v-else key="edit">
      Edit
    </button>
  </transition>
</template>

