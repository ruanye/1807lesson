<template>
	<div>这是my页面
     <A></A>
	</div>
</template>
<script>
import {getAlist} from '../api/user.js'
import A from './A'
export default {
	created() {
	  getAlist().then(data=>{
		  console.log(data)
	  })
	},
	components:{
		A
	}
}
</script>

