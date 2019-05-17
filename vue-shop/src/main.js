import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font.css'
// 轮播图插件 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558074667&di=4b9d517ae990ae2cf8cc8b67e1f18f5e&src=http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/adaf2edda3cc7cd9f4f6fbc33f01213fb90e91d5.jpg',
  attempt: 1
})
Vue.use(VueAwesomeSwiper)
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.config.productionTip = false
new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')

