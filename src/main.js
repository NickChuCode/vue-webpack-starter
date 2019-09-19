import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 在入口文件index.js最后添加如下代码
if (module.hot) {
  // 通知 webpack 该模块接受 hmr
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}
