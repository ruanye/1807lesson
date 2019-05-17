// 设置默认请求的域名(带着端口号)
// /slider  
// http://132.232.89.22:8081/hot 
axios.defaults.baseURL='http://132.232.89.22:8081'
//axios.get() 整个请求返回的是一个promise 
//响应拦截器 拦截所有后端响应后来的结果 苹果 -> 范康文把肉吃没->苹果核
axios.interceptors.response.use(res=>{
	 return res.data
},err=>{
   Promise.reject(err)
})
axios.get('/slider').then(res=>{
	//data是请求成功之后后端返回的数据
	console.log(res)

})
axios.get('/hot').then(res=>{
	//data是请求成功之后后端返回的数据
	console.log(res)

})
// http://132.232.89.22:3000/list?id=4 id不同返回值不同
let id =4;
axios.get(`http://132.232.89.22:3000/list?id=${id}`).then(data=>{
	console.log(data)
})
// axios.post('http://132.232.89.22:3000/list',{}).then(data=>{
// 	console.log(data,'post')
// })
// 根据id来删除数据 
let delid = 30
async function delegood(){
  return await axios.delete(`http://132.232.89.22:3000/list?id=${delid}`)
}
delegood()
axios.put() //和post完全相同 resultful风格  resultful api 
 //put 表示数据修改 post表示新增 delete表示删除 get表示获取 
// 接口文档  
// url  /list  
// 参数 Object
// name 商品名称   必填  String 
// img  商品图片   选填  String 
//info  商品简介   必填  String 
//price 商品价格   必填  Number 
// 接口数据示例 {name:'d',img:'a.img',info:'简介'，price:333}
// 接口文档  
// url  /list  
// 参数 Array 
// name 商品名称   必填  String 
// img  商品图片   选填  String 
//info  商品简介   必填  String 
//price 商品价格   必填  Number 
// 接口数据示例 [{name:'d',img:'a.img',info:'简介'，price:333},{name:'d',img:'a.img',info:'简介'，price:333}]



//res=  {congig:...,data:这里对应的才是我要的数据，headers;...}
// res.data

let x= 1,y=3.c =4 
let x= 1 y= 3,c =4 z= 6 h =111 121i33j
res.data response interceptors.response.use 然后 这样做 