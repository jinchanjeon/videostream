import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import io from 'socket.io-client'

const socket = io('http://localhost:8000');
Vue.prototype.$socket = socket;

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()  // 이벤트 버스용 빈 인스턴스

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
