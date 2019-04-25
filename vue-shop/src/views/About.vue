<template>
  <div class="about">
     <div class="container">
        <ul class="con-items">
          <li v-for="item in pagelist" :key="item.id" >
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
            <p>{{item.info}}</p>
            <p>{{item.price}}$</p>
          </li>
        </ul>
        <div class="btnbox">
         <button class="btn" @click="loadMore">{{hasMore?'点击加载更多':'没有更多了'}}</button>
        </div> 
     </div>
  </div>
</template>
<script>
import {getPage} from '../api'
export default {
  name:'about',
  data(){
    return{
      page:0,
      pagelist:[],
      hasMore:true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList(){
     let {data:{hasMore,pagedata}}= await getPage(this.page)
     //要把原来的数据和重写请求的数据放在一起 这样才是所有的数据
    //  this.pagelist =this.pagelist.concat(pagedata);
     this.pagelist=[...this.pagelist,...pagedata]
     this.hasMore= hasMore
    },
    // 加载更多
    loadMore(){
      this.page++;//页数加1
      // 如果hasMore为false表示没有更多了 就不在执行请求
      if(!this.hasMore)return
      this.getList()
    }
  }

}
</script>
<style lang="less" scoped>
.con-items{
  box-sizing: border-box;
  padding: 0 20px; 
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.btnbox{
  text-align: center;
}
.btn{
  display: inline-block;
  outline: none;
  appearance: none;
  width: 200px;
  height: 60px;
  line-height: 60px;
}
</style>
