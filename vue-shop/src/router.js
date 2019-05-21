import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/fuxi',
      name:'fuxi',
      component:()=>import('@/views/fuxi.vue')

     },
    {
      path:'/prop',
      name:'prop',
      component:()=>import('@/views/prop.vue')

     },
     {
      path: '/',
      name: 'home',
      component: ()=>import('./views/Home.vue'),
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/my',
      name:'my',
      component:()=>import('./views/My.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path:'/car',
      name:'car',
      component:()=>import('./views/Car.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
     path:'/*',
     redirect:'/',
     component:()=>import('./views/Home.vue')
    }
  ]
})

