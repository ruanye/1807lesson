<template>
  <div class="home">
      <div class="container">
        <Banner :swiperSlides='sliders'></Banner> 
        <div class="home-list">
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
<style lang="less">
.home-list{
   ul{
     padding: 0 15px;
     box-sizing: border-box;
     display: flex;
     flex-wrap: wrap;
    li{
       width: 50%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       margin-top: 20px;
       border-bottom: 1px solid #eee;
       img{
         max-width: 90%;
         height: auto;
        }
     }
   }
}
</style>
