let http = require('http');
let url = require('url')
let fs  = require('fs')
let fsPromise = fs.promises;
function readjosn(){
 return fsPromise.readFile('./good.json','utf8').then(data=>{
    return JSON.parse(data) 
 })
}
// 引入轮播图数组
let banner = require('./banner')
http.createServer((req,res)=>{
	  //允许哪个域名跨域 
		res.setHeader('Access-Control-Allow-Origin',"*");
    //允许哪个方法跨域
    res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
    //预检测存活时间，单位是s
    res.setHeader('Access-Control-Max-Age',6)
    // 设置编码格式 
    res.setHeader('Content-Type','text/json;charset=utf8')
    if(req.method==='OPITIONS'){
       res.end()//OPITIONS请求不做任何处理
    }
  let {pathname,query} =url.parse(req.url,true);
  // 轮播图接口
    if(pathname==='/slider'){
	     res.end(JSON.stringify({
		    code:200,
		    data:banner
	  }))
	  return
  }
  // 首页列表接口 http://localhost:3000/hot
  if(pathname==='/hot'){
    readjosn().then(data=>{
     let hotdata = data.slice(0,6);
      res.end(JSON.stringify({
        code:200,
        data:hotdata
      }))
    })
    return
  }
  // 分页接口  http://localhost:3000/list?page=1
  if(pathname==='/list'){
     let page= parseInt(query.page); //取出前端传过来的页数
    //把所有的数据拿出来  第一页1 1-5 第二页 5-10   page 
    // page=0 0 5   page=1 5 10  
    readjosn().then(data=>{
     //假设maxlength是最大的数据长度 
     let maxlength= (page+1)*5 
     let pagedata= data.slice(maxlength-5,maxlength)
      // 判断是否有下一页(用hasmore表示) maxlength >=data.length表示 没有下一页了 
      let hasMore = maxlength>=data.length?false:true
      res.end(JSON.stringify({
        code:200,
        data:{
          hasMore,
          pagedata
        }
      }))
    })
    return
  }
  // 详情页面请求
  if(pathname==='/detail'){
    let id = query.id;
    readjosn().then(data=>{
       let single =data.find(item=>item.id==id)
       console.log(single)
       res.end(JSON.stringify({
         code:200,
         data:single
       }))
    })
    return 
  }
  res.end('404')
}).listen(3000)
//http://localhost:3000/slider