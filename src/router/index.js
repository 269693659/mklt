import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'name',
    component:()=>import('../views/home'),
    meta:{

    }
  },
  {
    path:'/news',
    name:'news',
    component:()=>import('../views/news')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
