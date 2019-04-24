// node 后端语言  无阻塞异步io
let http = require('http') 
// http 模块 自带模块
let url = require('url')
//url 解析url上面的各种参数 url 是请求传过来的 自带
// 创建自己的第一个服务器
// createServer 创建服务器
// req request 请求 
// res response 响应 
// 需要有端口号 0-65000
// listen 表示监听的是哪个端口号  
// res.end() 后端响应数据
// vscode coderuning 插件启动 webstorm 直接运行
// 命令行启动 node 文件名 
// 注意 服务器端代码有改动需要重启服务器 
 // urlobj.pathname  访问路径  localhost:3000/localhost:3000/ab  /ab 
//urlobj.query 查询字符串 localhost:3000?name=1&password=2
http.createServer(function(req,res){
	let urlobj = url.parse(req.url,true)
	let pathname = urlobj.pathname;
	let query = urlobj.query
	 //query.name  
	// http://localhost:3000/a?name=1 query {name:1,id:3}
	if(pathname==='/a'){
	  console.log(query.name)
	  res.end('222')
	  return 	
	}
	// http://localhost:3000/b
	if(pathname==='/b'){
		res.end('this is b')
		return
	}
    res.end('hello world')
}).listen(3000,function(){
	console.log('服务端3000启动成功')
}) 
// localhost:3000
// 文件 文件夹起名  不要用中文 node vue react axios  已经是第三方包的名字 
