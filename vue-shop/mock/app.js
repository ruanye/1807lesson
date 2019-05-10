let express = require('express');
let app = express();
let cors = require('cors')
// 中间件都用use来使用  中间件基本上都是函数
app.use(cors())
// http://localhost:8080/
let fs  = require('fs')
let fsPromise = fs.promises;
function readJson(path){
 return fsPromise.readFile(path,'utf8').then(data=>{
    return JSON.parse(data) 
 })
}
function writeJson(path,data){
  return fsPromise.writeFile(path,JSON.stringify(data),'utf8')
}

// 引入轮播图数组
let banner = require('./banner')
app.get('/slider',function(req,res){
   res.json({
		    code:200,
		    data:banner
	  })
})
app.get('/hot',function(req,res){
	readJson('./good.json').then(data=>{
		let hotdata = data.slice(0,6)
		 res.json({
			 code:200,
			 data:hotdata
		 })
	})
})
// req.query 可以直接取到查询字符串的值 
app.get('/list',function(req,res){
   let page = parseInt(req.query.page);
   readJson('./good.json').then(data=>{
     let maxlength= (page+1)*5 
     let pagedata= data.slice(maxlength-5,maxlength)
     let hasMore = maxlength>=data.length?false:true
      res.json({
        code:200,
        data:{
          hasMore,
          pagedata
        }
      })
    })
})
app.get('/detail',function(req,res){
	let id = req.query.id;
	 readJson('./good.json').then(data=>{
       let single =data.find(item=>item.id==id)
       if(!single){
         res.json({
           code:201,
           data:{}
         })
         return
       }
       res.json({
         code:200,
         data:single
       })
    })
})
app.listen(8080) //监听端口 
