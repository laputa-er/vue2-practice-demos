/**
 * Created by sean on 16/11/25
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App'
import Env from './config/Env'

/* eslint-disable no-new */
Vue.use(VueRouter)

// 开启 debug 模式
Vue.config.debug = true

// 路由配置
let router = new VueRouter({
  // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
  routes,
  mode: (Env === 'production' ? 'history' : 'hash'),
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }

})

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
