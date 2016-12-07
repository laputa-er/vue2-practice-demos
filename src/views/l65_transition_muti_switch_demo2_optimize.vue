/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 20:18:20
 */
<script>
  export default {
    data () {
      return {
        docState: 'editing'
      }
    },
    computed: {
      buttonMessage: function () {
        switch (this.docState) {
          case 'saved': return 'Edit'
          case 'edited': return 'Save'
          case 'editing': return 'Cancel'
        }
      }
    }
  }
</script>

<template>
  <transition>
    <button v-bind:key="docState">
      {{ buttonMessage }}
    </button>
  </transition>
</template>

