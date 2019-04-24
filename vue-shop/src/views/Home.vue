<template>
  <div class="home">
      <div class="container">
        <Banner :swiperSlides='sliders'></Banner> 
        <div>
           <ul>
             <li v-for="item in homelist" :key="item.id">
               <img :src="item.img" alt="">
               <p>{{item.name}}</p>
               <p> {{item.info}}</p>
               <p> {{item.price}}</p>
             </li>
           </ul>
        </div>
      </div>
  </div>
  
</template>
<script>
import Banner from '../components/Banner'
import {getBanner,getHomeList} from '../api' //解构赋值出来getbanner的方法 
export default {
  name: 'home',
  components: {
   Banner
  },
  data(){
    return{
       sliders:[],
       homelist:[]
      }
  },
  created() {
      this.getslider()
      this.getlist()
  },
  methods:{
    // 轮播
   async getslider(){
       let {data:sliders}= await getBanner();
       this.sliders=sliders;
    },
    // 列表
    async getlist(){
      let {data:homelist}= await getHomeList();
      this.homelist=homelist;
    }
  }
}
</script>
