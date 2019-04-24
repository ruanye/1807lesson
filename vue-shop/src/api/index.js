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


