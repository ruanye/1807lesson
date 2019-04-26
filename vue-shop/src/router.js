import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('./views/Home.vue')
    },
    {
      path:'/my',
      name:'my',
      component:()=>import('./views/My.vue')
    },
    {
      path:'/car',
      name:'car',
      component:()=>import('./views/Car.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    }
  ]
})
