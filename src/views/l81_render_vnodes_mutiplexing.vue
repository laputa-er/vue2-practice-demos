/**
 * 
 * @authors sean(eli01linux@aliyun.com)
 * @date    2016-12-07 18:37:48
 */
<script>
  export default {
    data () {
      return {}
    },
    render (createElement) {
      return createElement(
        'div',
        Array.apply(null, {length: 20}).map(() => createElement('p', 'hello!'))
      )
    }
  }
</script>

