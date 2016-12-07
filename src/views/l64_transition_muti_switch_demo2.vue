/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 16:40:29
 */
<script>
  export default {
    data () {
      return {
        docState: 'saved'
      }
    }
  }
</script>

<template>
  <transition>
    <button v-if="docState === 'saved'" key="saved">
      Edit
    </button>
    <button v-if="docState === 'edited'" key="edited">
      Save
    </button>
    <button v-if="docState === 'editing'" key="editing">
      Cancel
    </button>
  </transition>
</template>

