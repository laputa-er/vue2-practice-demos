<script>
  export default {
    data () {
      return {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      }
    },
    created: function () {
      this.$watch('firstName', function (val) {
        this.fullName = val + ' ' + this.lastName
      })
      // lastName的改变会触发该函数，最终导致 fullName 的改变
      this.$watch('lastName', function (val) {
        this.fullName = this.firstName + ' ' + val
      })
    }
  }
</script>

<template>
  <div>
    Full Name: {{fullName}}
    <br>
    <input v-model="lastName"/>
  </div>
</template>

<style scope lang="sass">
  input
    border: 2px solid gray;

</style>

