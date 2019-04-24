import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font.css'
// 轮播图插件 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
