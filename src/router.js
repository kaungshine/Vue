import Vue from 'vue'
// router
import VueRouter from 'vue-router'
import store from './store'

import Home from '@/views/HelloWorld.vue'
import Testing from '@/views/Testing.vue'
import ItemList from '@/views/ItemList.vue'
import Detail from '@/views/Detail.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import OrderDetail from '@/views/OrderDetail.vue'
import OrderShow from '@/views/OrderShow.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    { 
      path: '/testing',
      component: Testing 
    },
    { 
      path: '/itemlist',
      component: ItemList 
    },
    { 
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    },
    {
      path: '/orders',
      name: 'order-list',
      component: OrderDetail,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/order/:id',
      name: 'order-show',
      component: OrderShow,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history' // abstract
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  }else{
    next()
  }
})

export default router