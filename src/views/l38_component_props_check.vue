<script>
  export default {
    data () {
      return {
        propB: 'abc',
        propH: '{"name":"xiaoming", "age":18}',
        propG: 100
      }
    },
    components: {
      'child-component': {
        name: 'child-component',
        template: `
          <div>
            <h3>子组件</h3>
            <div>propB:{{propB}}</div>
            <div>typeof propH:{{typeof propH}}</div>
            <div>propG: {{propG}}</div>
          </div>`,
        props: {
          // 基础类型检测（null意思是任何类型都可以）
          propA: Number,
          // 多种类型用数组，满足一种就行
          propM: [String, Number],
          // 必需且是字符串
          propB: {
            type: String,
            required: true// 不能没有这个属性
          },
          // 数字，有默认值
          propC: {
            type: Number,
            default: 100
          },
          // 对象／数组的默认值应当由一个函数返回
          propD: {
            type: Object,
            default: function () {
              return {msg: 'hello'}
            }
          },
          // 指定这个 prop 为双向绑定
          // 如果绑定类型不对讲抛出一条警告
          propE: {
            twoWay: true
          },
          // 自定义验证函数
          propF: {
            volodator: function (value) {
              return value > 10
            }
          },
          // 转换函数（在设置值之前转换值）
          propG: {
            coerce: function (val) {
              return val + ''// 将值转换为字符串
            }
          },
          propH: {
            coerce: function (val) {
              return JSON.parse(val)// 将 JSON 字符串转换为对象
            }
          }
        }
      }
    }
  }
</script>

<template>
  <div>
    <h1>props验证</h1>
    <input v-model="propB">
    <child-component v-bind:prop-b="propB" v-bind:prop-h="propH" v-bind:prop-g="propG"></child-component>  
  </div>
</template>