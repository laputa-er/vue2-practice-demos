<script>
  import {
    mapActions,
    mapState
  } from 'vuex'
  import store from './l100_vuex_actions_with_muti-mutations/store'

  export default {
    data () {
      return {
        products: [
          {
            id: '001',
            desc: 'macbook pro'
          },
          {
            id: '002',
            desc: 'smartisan t3'
          },
          {
            id: '003',
            desc: 'iphone 8s'
          }
        ],
        selectedProducts: []
      }
    },
    store,
    methods: {
      ...mapActions([
        'checkout'// 映射 this.checkout() 为 this.$store.dispatch('checkout')
      ])
    },
    computed: mapState([
      'status'
    ])
  }
</script>

<template>
  <div>
    <ul>
      <div v-for="product of products">
        <label for="">{{product.desc}}</label>
        <input type="checkbox" :value="product.id" v-model="selectedProducts">
      </div>
    </ul>
    <button @click="checkout(selectedProducts)">购买</button>
    <p>{{status}}</p>
    <p v-if="status === 0">未购买</p>
    <p v-if="status === 1">购买成功</p>
    <p v-if="status === 2">购买失败</p>
  </div>
</template>