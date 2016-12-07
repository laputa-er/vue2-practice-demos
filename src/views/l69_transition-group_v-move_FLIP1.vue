/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-04 22:39:27
 */
<script>
  import _ from 'lodash'
  export default {
    data () {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    methods: {
      // 洗牌
      shuffle: function () {
        this.items = _.shuffle(this.items)
      }
    }
  }
</script>

<template>
  <div id="flip-list-demo" class="demo">
    <button v-on:click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
  /* 会在元素的改变定位的过程中应用 */
  .flip-list-move {
    transition: transform 1s;
  }
</style>
