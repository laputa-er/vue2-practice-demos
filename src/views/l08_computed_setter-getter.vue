<script>
  export default {
    data () {
      return {
        a: 1,
        firstName: 'Foo',
        lastName: 'Bar'
      }
    },
    computed: {
      /**
       * 一个计算属性的 getter
       * @return {number} 计算属性的值
       */
      b: function () {
        // console.log(this.c);
        return this.a + 1// this 指向 Vue 实例
      },
      /**
       * 全名（getter 和 setter）
       * @type {Object}
       */
      fullName: {
        // getter
        get: function () {
          return this.firstName + this.lastName
        },

        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }
  }
</script>

<template>
  <div>
    <div>
      a = {{a}}, b = {{b}}
    </div>
    <div>
      fullName = {{fullName}}
    </div>
  </div>
</template>
