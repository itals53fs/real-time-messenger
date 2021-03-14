import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = "https://realtime-messenger-f3bfc-default-rtdb.firebaseio.com"

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})