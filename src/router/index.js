import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'name',
    component:()=>import('../views/home'),
    meta:{
      showheaderNav:'true'
    }
  },
  {
    path:'/news',
    name:'news',
    component:()=>import('../views/news')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login')
  },
  {
    path:'/ticket/buy',
    name:'ticket-buy',
    component:()=>import('../views/ticket/buy')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
