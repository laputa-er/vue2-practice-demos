/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-11-28 18:21:28
 */
<script>
  export default {
    data () {
      return {
        price: 0,
        shipping: 0,
        handling: 0,
        discount: 0
      }
    },
    computed: {
      total: function () {
        return ((
          this.price * 100 +
          this.shipping * 100 +
          this.handling * 100 -
          this.discount * 100
        ) / 100).toFixed(2)
      }
    },
    components: {
      'currency-input': {
        template: `
          <span>
            $
            <input
              ref="input"
              v-bind:value="value"
              v-on:input="updateValue($event.target.value)"
            >
          </span>
        `,
        props: ['value'],
        methods: {
          // Instead of updating the value directly, this
          // method is used to format and place constraints
          // on the input's value
          updateValue: function (value) {
            var formattedValue = value
              // Remove whitespace on either side
              .trim()
              // Shorten to 2 decimal places
              .slice(0, value.indexOf('.') + 3)
            // If the value was not already normalized,
            // manually override it to conform
            if (formattedValue !== value) {
              this.$refs.input.value = formattedValue
            }
            // Emit the number value through the input event
            this.$emit('input', Number(formattedValue))
          }
        }
      }
    }
  }
</script>

<template>
  <currency-input v-model="price"></currency-input>
</template>

