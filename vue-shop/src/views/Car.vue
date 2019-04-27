<template>
	<div class="container">
		<div>
			 <label for="checkAll" >
			  <span>全选</span>
			  <input type="checkbox" id="checkAll" class="inp" :checked="checkAll">
			 </label>
		 </div>
		 
		<ul class="carlist-con">
			<li v-for="good in carlist" :key="good.id">
				<input type="checkbox" class="inp" v-model="good.sele" id="inp">
		       <div>
				 <img :src="good.img" alt="">
				 <p>{{good.name}}</p>
				 <p>{{good.count}}</p>
				 <p>{{good.price}}</p>
				</div>
			</li>
			
		</ul>
		<div>总价：{{totalPrice}}</div>
	</div>
</template>
<script>
export default {
   name:'car',
   computed:{
	  checkAll(){
       return this.carlist.every(item=>item.sele==true)
	  },
	  totalPrice(){
		  return this.carlist.filter(item=>item.sele==true).reduce((prev,next)=>{
			 return prev+next.count*next.price 
		  },0)
	  }
   },
   data(){
	   return{
          carlist:[]
	   }
   },
   created(){
	   if(localStorage['carlist']){
		 this.carlist =JSON.parse(localStorage['carlist'])
	   }
	}
}
</script>
<style lang="less" scoped>
  .carlist-con{
	  li{
		  box-sizing: border-box;
		  display: flex;
		   flex-direction: row;
		  padding-left: 10px;
		  .inp{
			  align-self: center;
		   }
		   div{
			   padding-left: 10px;
			   flex: 0 0 auto;
			   img{
				   max-width: 80%;
			   }
		   }
		   
	  }
  }
  .inp{
	flex:0 0 auto;
    appearance: none;
	outline: none;
	width: 40px;
	height: 40px;
	border: 1px solid green;
	border-radius: 20%;
	position: relative;
	
  }	
  .inp:checked.inp:before{
	  position: absolute;
	  content: "✔";
	  font-size: 20px;
	  width: 20px;
	  height: 20px;
	  top:10px;
	  left:10px ;
	  color: green;
	  
  }
  

 
</style>
