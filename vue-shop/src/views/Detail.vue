<template>
	<div class="con">
	  <head-title :showArrow="true">详情页</head-title>
		<img :src="single.img" alt="">
	    <p>{{single.name}}</p>
	</div>
</template>
<script>
import {getDetail} from '../api'
import HeadTitle from '../components/HeadTitle.vue'
export default {
 name:'detail',
 data(){
	 return {
		 single:{
			 img:null,
			 name:null
		 }
	 }
 },
 components:{
	 HeadTitle
 },
 created() {
	 this.Detial()
 },
 computed:{
    deId(){
	  return this.$route.params.id	 
	}
 },
 methods:{

	// 发送详情请求
	async Detial(){
      let {data} = await getDetail(this.deId)
	    this.single = data;
	   if(JSON.stringify(this.single)=='{}'){
		 this.$router.push('/about') 
	  }
	} 
 }
}
</script>
<style lang="less" scoped>
	 .con{
		 position: fixed;
		 width: 100%;
		 height: 100%;
		 z-index: 30;
		 background:#fff;
		 overflow-y: auto;
		
	 }

</style>
