/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 19:17:32
 */
<script>
  import AnchoredHeading from '../components/AnchoredHeading'
  export default {
    data () {
      return {}
    },
    // 将 h 作为 createElement 的别名是一个通用惯例
    // 比如声明 h 参数，否则会报错！
    render (h) {
      return (
        <AnchoredHeading level={1}>
          <span>Hello</span> world!
        </AnchoredHeading>
      )
    },
    components: {
      // 在 template 中使用菜需要这个，在这里注册 AncoredHeading 不是必需的
      // 之所以放在这是因为 eslint 报了没有使用 AnchoredHeading 这个变量！
      AnchoredHeading
    }
  }
</script>


