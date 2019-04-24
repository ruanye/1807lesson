let http = require('http');
let url = require('url')
// 引入轮播图数组
let banner = require('./banner')
http.createServer((req,res)=>{
	  //允许哪个域名跨域 
		res.setHeader('Access-Control-Allow-Origin',"*");
    //允许哪个方法跨域
    res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
    //预检测存活时间，单位是s
    res.setHeader('Access-Control-Max-Age',6)
    if(req.method==='OPITIONS'){
       res.end()//OPITIONS请求不做任何处理
    }
  let {pathname,query} =url.parse(req.url,true);
  if(pathname==='/slider'){
	  res.end(JSON.stringify({
		 code:200,
		 data:banner
	  }))
	return
  }
  res.end('404')
}).listen(3000)
// http://localhost:3000/slider