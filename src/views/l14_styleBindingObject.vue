<script>
  export default {
    data () {
      return {
        /* 对象放在 view */
        activeColor: 'red',
        fontSize: 30,

        /* 对象放在 model */
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      }
    }
  }
</script>

<template>
  <div>
    <div v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}">对象放在 view</div>

    <div v-bind:style="styleObject">对象放在 model</div>
  </div>
</template>
