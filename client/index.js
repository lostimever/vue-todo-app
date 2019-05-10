import Vue from 'vue'
import Vuex from 'vuex'

// import { Input } from 'element-ui'
import App from './App.vue'
import VueRouter from 'vue-router'

// import './assets/styles/global.styl'

import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

// Vue.component(Input.name, Input)

const router = createRouter()
const store = createStore()

// 动态注册模块
// store.registerModule('c', {
//   state: {
//     text: 'ccccc'
//   }
// })

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// }) 第一个参数相当于 getters ， 第二个参数：执行完之后的回调函数

// 监听mutations
// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })
// 监听actions
// store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload)
// })

// store.unregisterModule('c')

// router.beforeEach ((to, from, next) => {
//   console.log('before each involked')
//   if (to.fullPath === '/app') {
//     next()
//   }
// })

// router.beforeResolve ((to, from, next) => {
//   console.log('before Resolve involked')
//   next()
// })

// router.afterEach ((to, from) => {
//   console.log('after each involked')
//   // next()
// })

new Vue({
  el: '#root',
  router,
  store,
  render: (h) => h(App)
})
