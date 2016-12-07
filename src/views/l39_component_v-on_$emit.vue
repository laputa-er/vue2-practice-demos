<script>
  export default {
    data () {
      return {
        total: 0
      }
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    },
    components: {
      'button-counter': {
        template: '<button v-on:click="incr">{{ counter }}</button>',
        data () {
          return {
            counter: 0
          }
        },
        methods: {
          incr: function () {
            this.counter += 1
            this.$emit('increment')
          }
        }
      }
    }
  }
</script>

<template>
  <div id="counter-event-example">
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>
</template>