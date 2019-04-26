<template>
  <div class="home">
    <div class="container">
       <div v-if="showLoading">
         <Loading></Loading>
       </div>
      <template v-else>
      <Banner :swiperSlides="sliders"></Banner>
      <div class="home-list">
        <ul>
          <li v-for="item in homelist" :key="item.id">
            <img :src="item.img" alt>
            <p>{{item.name}}</p>
            <p>{{item.info}}</p>
            <p>{{item.price}}</p>
          </li>
        </ul>
      </div>
    </template>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
import Loading from '../components/Loading'
import { getHomeAll } from "../api"; //解构赋值出来getbanner的方法
export default {
  name: "home",
  components: {
    Banner,
    Loading
  },
  data() {
    return {
      sliders: [],
      homelist: [],
      showLoading:true
    };
  },
  created() {
    this.getAll()
  },
  methods: {
    async getAll(){
      let [{data:sliders},{data:homelist}] = await getHomeAll()
      this.sliders=sliders;
      this.homelist=homelist;
      // 数据都拿到了 
       this.showLoading=false
     
     
    }
  }
};
</script>
<style lang="less">
.home-list {
  ul {
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      border-bottom: 1px solid #eee;
      img {
        max-width: 90%;
        height: auto;
      }
    }
  }
}

</style>
