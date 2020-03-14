// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/border.css'
import 'styles/reset.css'
import { Button, Cell, Field, Popup, Picker, DatetimePicker, Radio, Header } from 'mint-ui'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import Vconsole from 'vconsole'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Field.name, Field);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Radio.name, Radio);
Vue.component(Header.name, Header);
// Vue.use(MintUI)
// Vue.use(new Vconsole())

Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
