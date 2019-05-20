import axios from 'axios'
//axios 的封装 
//process.env.NODE_ENV 通过它的值来判断是开发环境还是生产环境 开发环境 development(开发)production(生产)
class httpRequest{
	constructor(){
      //一些公共的配置参数 
	   this.baseURL = process.env.NODE_ENV=='production'?'/':'http://localhost:3000',
	  this.timeout = 3000
	}
	merge(options){
		return {baseURL:this.baseURL,
		timeout:this.timeout,...options}
	}
	setinterceptors(instance){
		//响应拦截 
       instance.interceptors.response.use(res=>{
          return res.data
	   },err=>{
		  Promise.reject(err) 
	   })
	   //请求拦截
	   instance.interceptors.request.use(config=>{
		  config.headers['Authorization'] = 'token'
		   return config 
	   },err=>{

	   })
	}
	request(options){
      //axios 官方提供  创建一个axios实例 
	  let instance  =  axios.create()
	  //merge 用来合并参数 
	  let params = this.merge(options);
	  //设置拦截器 
	  this.setinterceptors(instance)
	  return instance(params)//返回的是一个promise 
	}
}
export default new httpRequest
//   httpRequest.request({
	  
// 	 url:'xxx',
// 	 methos:'get',
// })