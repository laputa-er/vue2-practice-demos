<script>
  export default {
    data () {
      return {
        isActive: true,
        error: null
      }
    },
    computed: {
      classObject: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    }
  }
</script>

<template>
  <div v-bind:class="classObject">class绑定计算属性</div>
</template>