<template>
	<div>
	  <span>{{msg}}</span>
	  <span>我来自传值{{abc}}</span>
	</div>
</template>
<script>
export default {
	props:{
	 abc:{
        default:()=>([1,3])
	 }
	},
  	data(){
	  return {
		  msg:'我是msg组件'
	  }	  
  }
}
</script>
	