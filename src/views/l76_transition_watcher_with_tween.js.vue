/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-06 11:48:36
 */
<script>
  import TWEEN from 'tween.js'
  export default {
    data () {
      return {
        number: 0,
        animatedNumber: 0
      }
    },
    watch: {
      number (newValue, oldValue) {
        const vm = this
        // 动画循环：没有提供停止条件！所以该函数会一直执行，不管 TWEEN 动画是否结束
        function animate (time) {
          // 递归进行动画
          window.requestAnimationFrame(animate)
          // 更新数字
          TWEEN.update(time)
        }
        new TWEEN
          // 每次数字发生变化，都用之前的值作为初始值
          .Tween({
            tweeningNumber: oldValue
          })
          // 动画缓动类型
          .easing(TWEEN.Easing.Quadratic.Out)
          // 设置数字递增动画的目标值和整个动画的持续时长
          .to({
            tweeningNumber: newValue
          }, 500)
          // 该动画中数字每次更新都同步到 animatedNumber
          .onUpdate(function () {
            vm.animatedNumber = this.tweeningNumber.toFixed(0)
          })
          // 开始动画
          .start()

        animate()
      }
    }
  }
</script>

<template>
  <div>
    <input type="number" step="20" v-model.number="number">
    <p>{{ animatedNumber }}</p>
  </div>
</template>
