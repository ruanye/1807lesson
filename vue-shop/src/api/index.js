import axios from 'axios'
axios.defaults.baseURL='http://localhost:3000'
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





