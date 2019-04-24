// fs 文件模块
let fs = require('fs')
// 封装promise版读文件的方法
function myReadFile(url){
   return new Promise((resolve,reject)=>{
      fs.readFile(url,'utf8',function(err,data){
		  if(err)reject(err)
		  resolve(data)
	  })
   })
}
// 先喝豆浆 在吃包子 
myReadFile('./a.txt').then(data=>{
	console.log(data,1)
	return myReadFile('./a.txt')
}).then(data=>{
	console.log(data,2)
})





