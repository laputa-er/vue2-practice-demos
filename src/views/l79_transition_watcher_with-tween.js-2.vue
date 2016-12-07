/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 16:53:08
 */
<script>
  import Vue from 'vue'
  import TWEEN from 'tween.js'

  // 这种复杂的补间动画逻辑可以被复用
  // 任何整数都可以执行动画
  // 组件化使界面的逻辑更加清晰
  // 可以支持更多更加复杂的动态过渡
  // strategies
  Vue.component('animated-integer', {
    template: `<span> {{ tweeningValue }}</span>`,
    props: {
      value: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        tweeningValue: 0
      }
    },
    watch: {
      value (newValue, oldValue) {
        // 数字变化时的动画
        this.tween(oldValue, newValue)
      }
    },
    mounted () {
      // 首次加载组件时数字的动画
      this.tween(0, this.value)
    },
    methods: {
      tween (startValue, endValue) {
        const vm = this
        function animate (time) {
          window.requestAnimationFrame(animate)
          TWEEN.update(time)
        }
        new TWEEN
          .Tween({
            tweeningValue: startValue
          })
          .to({
            tweeningValue: endValue
          }, 500)
          .onUpdate(function () {
            vm.tweeningValue = this.tweeningValue.toFixed(0)
          })
          .start()
        animate()
      }
    }
  })
  export default {
    data () {
      return {
        firstNumber: 20,
        secondNumber: 40
      }
    },
    computed: {
      result () {
        return this.firstNumber + this.secondNumber
      }
    }
  }
</script>

<template>
  <div>
    <input type="number" v-model.number="firstNumber" step="20"> +
    <input type="number" v-model.number="secondNumber" step="20"> =
    {{ result }}
    <p>
      <animated-integer :value="firstNumber"></animated-integer> + 
      <animated-integer :value="secondNumber"></animated-integer> = 
      <animated-integer :value="result"></animated-integer>
    </p>
  </div>
</template>