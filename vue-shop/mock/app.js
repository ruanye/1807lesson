let express = require('express');
let app = express();
let path = require('path');
let cors = require('cors')
// 中间件都用use来使用  中间件基本上都是函数
app.use(cors())
let bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// 使用public 下面的静态文件 
// app.use(express.static('public'))
///__dirname 绝对路径 
// path.join 和path.resolve 是拼接路径用的   
// 访问静态文件的时候需要加速static路径 
app.use('/static', express.static(path.join(__dirname, 'public')))
// 所有的都会先走use  这里面的req,res和下面的req,res是一个 相当于一个拦截器 中间间里面必须调用next才会继续往下走  
app.use(function(req,res,next){
  res.header('Content-type','text/plain;charset=utf8');
  next()
})

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
//购物车列表 接口 
 app.get('/carlist',function(req,res){
      readJson('./car.json').then(data=>{
       res.json({
         code:200,
         data
       })
     })
 })
// 可以通过req.body 拿到post/put 等有请求体请求的参数 
//添加商品到购物车的请求 
app.post('/addcar',function(req,res){
         let adData =req.body;
         console.log(adData)
         if(!adData.id&&adData.id!=0&&!adData.name){
          res.json({
            code:201,
            msg:'参数错误'
          })
          return
        }
        readJson('./car.json').then(data=>{
         let  newData;
         let singledata = data.find(item=>item.id ==adData.id)
        if(singledata){
           singledata.count++;
           newData=[...data]
        }else{
          adData.count=1;
          newData = [...data,adData]
        }
         writeJson('./car.json',newData).then(()=>{
           res.json({
              code:200,
              msg:'添加成功'
            })
         })
       })
 })
 //删除购物车商品接口
 app.delete('/delegood',function(req,res){
       let id = req.query.id;
       readJson('./car.json').then (carlist=>{
       let newData = carlist.filter(item=>item.id!=id)
       writeJson('./car.json',newData).then(()=>{
        res.json({
          code:200,
          data:{}
        })
      })
    })
 })
// 购物车改变数量、是否选中接口
app.post('/changecount',(req,res)=>{
      let modifyData = req.body;
       readJson('./car.json').then(carlist=>{
        let newCarlist = carlist.map(item=>{
          // 如果id相等 证明是被修改的项 返回修改项 ，否则直接返回原有数据
          if(modifyData.id==item.id){
            return modifyData
          }
          return item
        })
        writeJson('./car.json',newCarlist).then(()=>{
          res.end(JSON.stringify({
            code:200,
            msg:'修改成功'
          }))
        })
      })
})

app.listen(3000) //监听端口 
