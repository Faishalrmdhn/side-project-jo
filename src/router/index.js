import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import hbd from '../views/Hbd.vue'
// import Cart from '../views/Cart.vue'
// import A from '../views/A.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
      path:'/hbd',
      name: 'Hbd',
      component: hbd
  }
//   {
//     path: '/cart',
//     name: 'Cart',
//     component: Cart,
//   },
//   {
//     path: '/a',
//     name: 'A',
//     component: A,
//   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
