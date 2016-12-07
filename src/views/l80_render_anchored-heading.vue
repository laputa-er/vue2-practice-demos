/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 18:08:41
 */
<script>
  import Vue from 'vue'
  /**
   * 递归地获取所有子节点下所有文本部分，并把它们拼接在一起
   * @param  {array} children 子节点
   * @return {string}  拼接在一起的文本
   */
  var getChilddrenTextContent = function (children) {
    return children.map((node) => {
      return node.children
        ? getChilddrenTextContent(node.children)
        : node.text
    }).join('')
  }

  // 具备锚点功能的额标题组件
  Vue.component('anchored-heading', {
    render (createElement) {
      // 作为唯一识别的字符串
      const headingId = getChilddrenTextContent(this.$slots.default)
        .toLowerCase()
        .replace(/\W+/g, '-')// 将空白符替换为 '_'
        .replace(/(^-|-$)/)// 去掉行首或行尾的 '_'

      return createElement(
        // 标签名
        'h' + this.level,
        // 子节点
        [
          createElement(
            // 标签名
            'a',
            // 标签属性
            {
              attrs: {
                name: headingId,
                href: '#' + headingId
              }
            },
            // 标签内容
            this.$slots.default
          )
        ]
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })
  export default {
    data () {
      return {}
    }
  }
</script>

<template>
  <div>
    <anchored-heading>
      <p><em>标题党</em>去死！去死！去死！</p>
    </anchored-heading>
  </div>
</template>

<style scoped>
  
</style>
