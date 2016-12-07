/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 13:51:37
 */
<script>
  import TweenLite from '../libs/TweenLite.min'
  export default {
    data () {
      const defaultSides = 10
      const stats = Array
        // 创建数组
        .apply(null, {
          length: defaultSides
        })
        // 初始化数组元素
        .map(() => 100)
      return {
        stats: stats,
        points: generatePoints(stats),
        sides: defaultSides,
        minRadius: 50,
        interval: null,
        updateInterval: 500
      }
    },
    watch: {
      // 边数的变化的时候修改边的信息
      sides (newSides, oldSides) {
        const sidesDifference = newSides - oldSides
        // 边数增加：push
        if (sidesDifference > 0) {
          for (let i = 1; i <= sidesDifference; i++) {
            this.stats.push(this.newRandomValue())
          }
        } else {
          // 边数减少：shift
          const absoluteSidesDifference = Math.abs(sidesDifference)
          for (let i = 1; i <= absoluteSidesDifference; i++) {
            this.stats.shift()
          }
        }
      },
      // 边的信息发生变化时，执行缓动动画
      stats (newStats) {
        TweenLite.to(
          this.$data,
          this.updateInterval / 1000,
          {
            points: generatePoints(newStats)
          }
        )
      },
      updateInterval () {
        this.resetInterval()
      }
    },
    mounted () {
      this.resetInterval()
    },
    methods: {
      // 为每个点提供一个随机半径
      randomizeStats () {
        this.stats = this.stats.map(() => this.newRandomValue())
      },
      // 创建随机半径
      newRandomValue () {
        return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
      },
      // 重新设置动画的频率
      resetInterval () {
        window.clearInterval(this.interval)
        this.randomizeStats()
        this.interval = window.setInterval(() => {
          this.randomizeStats()
        }, this.updateInterval)
      }
    }
  }

  /**
   * 获取指定定点坐标
   * @param  {number} value  举例圆心的长度（半径）
   * @param  {number} index 点的下标
   * @param  {number} total 定点的总数
   * @return {object} 坐标
   */
  function valueToPoint (value, index, total) {
    const x = 0
    const y = -value * 0.9
    const angle = Math.PI * 2 / total * index
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const tx = x * cos - y * sin + 100
    const ty = x * sin + y * cos + 100
    return {
      x: tx,
      y: ty
    }
  }

  /**
   * 生成所有顶点
   * @param  {array} stats 顶点半径
   * @return {string}      提供给 polygon 的顶点集合
   */
  function generatePoints (stats) {
    const total = stats.length
    return stats.map((stat, index) => {
      const point = valueToPoint(stat, index, total)
      return point.x + ',' + point.y
    }).join(' ')
  }

</script>

<template>
  <div>
    <svg width="200" height="200">
      <!-- 多边形 -->
      <polygon :points="points"></polygon>
      <!-- 外部的椭圆 -->
      <circle cx="100" cy="100" r="90"></circle>
    </svg>
    <!-- 边的数量 -->
    <label>Sides: {{ sides }}</label>
    <input
      type="range"
      min="3"
      max="500"
      v-model.number="sides"
    >
    <!-- 夹角的下限 -->
    <label>Minimum Radius: {{ minRadius }}%</label>
    <input
      type="range"
      min="0"
      max="90"
      v-model.number="minRadius"
    >
    <!-- 更新频率 -->
    <label>Update Interval:{{ updateInterval }} milliseconds</label>
    <input
      type="range"
      min="10"
      max="2000"
      v-model.number="updateInterval">
  </div>
</template>

<style scoped>
  svg {
    display: block;
  }
  polygon {
    fill: #41b883;
  }
  circle {
    fill: transparent;
    stroke: #35495e;
  }
  input[type="range"] {
    display: block;
    width: 100%;
    margin-bottom: 5px;
  }
</style>
