<template>
	<div>详情页
		{{deId}}
	</div>
</template>
<script>
import {getDetail} from '../api'
export default {
 name:'detail',
 data(){
	 return {}
 },
 created() {
	 this.Detial()
 },
 computed:{
    deId(){
	  return this.$route.query.id	 
	}
 },
 methods:{
	// 发送详情请求
	async Detial(){
      let d = await getDetail(this.deId)
	} 
 }
}
</script>
