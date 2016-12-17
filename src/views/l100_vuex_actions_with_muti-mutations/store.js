import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types'
import shop from './shop'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    status: 0,
    cart: {
      added: [
        'mix',
        'tesla'
      ]
    }
  },
  mutations: {
    [types.CHECKOUT_REQUEST] (state) {
      state.added = []
    },
    [types.CHECKOUT_SUCCESS] (state) {
      state.status = 1
    },
    [types.CHECKOUT_FAILURE] (state) {
      state.status = 2
    }
  },
  actions: {
    // 结账
    checkout ({commit, state}, products) {
      // 把当前购物车的物品备份起来
      const savedCartItems = [...state.cart.added]
      // 清空购物车（不应该假设一切都很顺利，这里是为了简化）
      commit(types.CHECKOUT_REQUEST)
      // 购物 API 接收一个成功回调和一个失败回调
      shop.buyProducts(
        products,
        // 成功操作
        (res) => {
          commit(types.CHECKOUT_SUCCESS)
        },
        // 失败操作
        (res) => {
          commit(types.CHECKOUT_FAILURE, savedCartItems)
        }
      )
    }
  }
})
export default store
