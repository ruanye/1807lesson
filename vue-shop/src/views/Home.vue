<template>
  <div class="home">
      <Banner :swiperSlides='sliders'></Banner>
  </div>
  
</template>
<script>
import Banner from '../components/Banner'
import {getBanner} from '../api' //解构赋值出来getbanner的方法 
export default {
  name: 'home',
  components: {
   Banner
  },
  data(){
    return{
       sliders:[],
      }
  },
  async created() {
     let {data:sliders}= await getBanner();
     this.sliders=sliders;
  }
 
}
</script>
