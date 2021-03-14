import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import register from '../views/register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //{path:'/register', component: register, name:'register'}
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
