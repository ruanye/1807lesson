<template>
	<div class="container">
		<head-title>购物车</head-title>
		<div>
			 <label for="checkAll" >
			  <span>全选</span>
			  <input type="checkbox" id="checkAll" class="inp" v-model="checkAll">
			 </label>
		 </div>
		 
		<ul class="carlist-con">
			<li v-for="good in carlist" :key="good.id">
				<input type="checkbox" class="inp" v-model="good.sele" id="inp" @change="modiGood(good)">
		       <div>
				 <img :src="good.img" alt="">
				 <p>{{good.name}}</p>
				 <p>
					 <span @click="modiGood(good,1)">+</span>
					 {{good.count}}
					 <span @click="modiGood(good,-1)">-</span>
					</p>
				  <p>{{good.price}}</p>
				  <button class="btn" @click.stop="deleGood(good)">删除</button>
				</div>
			</li>
			
		</ul>
		<div>总价：{{totalPrice}}</div>
	</div>
</template>
<script>
import {getCarList,deleCarGood,changeCount} from '../api'
import HeadTitle from '../components/HeadTitle.vue'
export default {
   name:'car',
	 components:{
		 HeadTitle
	 },
   computed:{
	  checkAll:{
        get(){
		  return this.carlist.every(item=>item.sele==true)
		// return !this.carlist.some(item=>item.sele==false)
		//判断选中的有多少个 把选中的放到一个数组里面 判断选中的数组长度是否是所有商品的数组长度  
		// let newary = this.carlist.filter(item=>item.sele==true)
		//  return newary.length ==this.carlist.length;	
		},
		set(val){//checkall改变后的值
          this.carlist.forEach(item=>item.sele=val)
		}
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
      this.getlist();
	  },
	methods:{
		// 获取购物车列表 
	 async getlist(){
      let {data} = await getCarList()
			this.carlist=data;
			// this.carlist.forEach(item=>{
			// 	 this.$set(item,'sele',true)
	    // })
		},
		// 购物车删除功能
	async	deleGood(good){
	    // 点击发送删除请求
		   await deleCarGood(good.id);
			// 请求成功之后前端做删除(需要后端删除之后前端再去做删除)
		  this.carlist =	this.carlist.filter(item=>item.id!=good.id)
			
		 },
		
	 // 商品参数改变事件  
	  async modiGood(good,num){
		  if(num){
				// num存在证明点击的是加号或者减号，否则点击的是单选
        good.count +=num;
			  if(good.count<1){
			   	good.count=1
			  }
			}
	   // 数量改变之后发送请求 
			await changeCount(good)
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
  
.btn{
  display: inline-block;
  outline: none;
  appearance: none;
  border: none;
  border-radius: 15px;
  background-color: antiquewhite;
  width: 200px;
  height: 60px;
  font-size: 30px;
  line-height: 60px;
}

 
</style>
