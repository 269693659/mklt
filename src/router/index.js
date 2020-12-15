import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/i18n'

Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    name:'name',
    component:()=>import('../views/home'),
    meta:{
      showheaderNav:'true',
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
  {
    path:'/ticket/pay',
    name:'ticket-pay',
    component:()=>import('../views/ticket/pay')
  },
  {
    path:'/live-view',
    name:'live-view',
    component:()=>import('../views/home/live-view.vue')
  },
  {
    path:'/importFile',
    name:'importFile',
    component:()=>import('../views/importFile/index.vue')
  },
  {
    path:'/table',
    name:'table',
    component:()=>import('../views/table/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
