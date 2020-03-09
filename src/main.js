// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/border.css'
import 'styles/reset.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import Vconsole from 'vconsole'

Vue.use(MintUI)
// Vue.use(new Vconsole())

Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
