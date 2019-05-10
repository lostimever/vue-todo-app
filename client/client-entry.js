import createApp from './create-app'
import bus from './utils/bus'

const { app, router } = createApp()

bus.$on('auth', () => {
  router.push('/login')
})

router.onReady(() => {
  app.$mount('#root')
})
