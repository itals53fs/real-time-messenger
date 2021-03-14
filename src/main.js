import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from'./plugins/firebase'
import './plugins/axios'

Vue.config.productionTip = false
Vue.use(firebase)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
