import axios from 'axios'
// axios.defaults.baseURL='http://localhost:3000'
// http://localhost:8080/slider
// 响应拦截
axios.interceptors.response.use(res=>{
	return res.data
},err=>{
 Promise.reject(err)	
})
// 请求轮播图的接口
export let getBanner=()=>{
	return axios.get('/slider')
}
// 请求首页列表 
export let getHomeList = ()=>{
	return axios.get('/hot')
}
// 分页请求
export let getPage =(page)=>{
	return axios.get(`/list?page=${page}`)
}
// 请求详情页 
export let getDetail =(id)=>{
  return axios.get(`/detail?id=${id}`)
}
// 使用promise.all 进行请求合并 
export let getHomeAll=()=>{
  return axios.all([getBanner(),getHomeList()])
}
// 添加商品到购物车  
export let addGood=(good)=>{
	console.log(good)
  return axios.post('/addcar',good)
}
// 购车列表接口
export let getCarList=()=>{
	return axios.get('/carlist') 
}
// 删除购物车中商品的接口
export let deleCarGood=(id)=>{
	return axios.delete(`/delegood?id=${id}`)
}
// // 数量改变请求 
// export let changeCount = (good)=>{
//    return axios.post('/changecount',good)
//}

// 数量改变请求 put方式 
export let changeCount = (good)=>{
   return axios.post(`/changecount`,good)
}






