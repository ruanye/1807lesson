<template>
	<div>
		prop
		<!-- <span>{{s}}</span> -->
		<span>{{s1}}</span>
		<span>{{s2}}</span>
	</div>
</template>
<script>
export default {
	data(){
	  return {
		  msg:'我是prop组件的信息'
	  }	
	},
	// props:['s'],//不需要验证 
	props:{
	  s1:{
          type:Boolean,
		  default:true
	    },
	   s2:{
          type:Array,
		  default:()=>([])
	    }
	},
	methods:{
		messageshow(){
			alert('我是prop组件的方法')
		}
	}
}
</script>
<style lang="less" scoped>
div{
   text-align: center;
   font-size: 40px;
   margin-top: 40px;
}
</style>