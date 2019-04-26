<template>
	<div>
		<img :src="single.img" alt="">
	    <p>{{single.name}}</p>
	</div>
</template>
<script>
import {getDetail} from '../api'
export default {
 name:'detail',
 data(){
	 return {
		 single:{}
	 }
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
