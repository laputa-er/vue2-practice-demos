/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-06 22:31:57
 */
<script>
  import TWEEN from 'tween.js'
  import Color from 'color-js'
  export default {
    data () {
      return {
        // 用户输入的16进制颜色值，比如：#ff00ff
        colorQuery: '',
        // 颜色的当前值
        color: {
          red: 0,
          green: 0,
          blue: 0,
          alpha: 1
        },
        tweenedColor: {}
      }
    },
    created () {
      this.tweenedColor = Object.assign({}, this.color)
    },
    watch: {
      // color对象的值一旦发生变化，就触发 TWEEN 动画
      color () {
        function animate (time) {
          window.requestAnimationFrame(animate)
          TWEEN.update(time)
        }
        // 注意！750ms 后，this.tweenedColor 的值会被改为 this.color 的值
        new TWEEN.Tween(this.tweenedColor)
          .to(this.color, 750)
          .start()
        animate()
      }
    },
    computed: {
      // 使用 color-js 实时地将 RGB 对象形式的颜色值转换为16进制颜色值
      tweenedCSSColor () {
        return new Color({
          red: this.tweenedColor.red,
          green: this.tweenedColor.green,
          blue: this.tweenedColor.blue,
          alpha: this.tweenedColor.alpha
        }).toCSS()
      }
    },
    methods: {
      // 更新 color 的值
      updateColor () {
        this.color = new Color(this.colorQuery).toRGB()
        this.colorQuery = ''
      }
    }
  }
</script>

<template>
  <div>
    <input
      v-model="colorQuery"
      v-on:keyup.enter="updateColor"
      placeholder="Enter a color" />
    <button v-on:click="updateColor">Update</button>
    <p>Preview:</p>
    <span
      v-bind:style="{ backgroundColor: tweenedCSSColor }"
      class="example-7-color-preview">
    </span>
    <p>{{ tweenedCSSColor }}</p>
  </div>
</template>

<style scoped>
  .example-7-color-preview {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
</style>
