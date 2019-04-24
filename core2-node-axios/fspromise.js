// fs自带的promise 10.2.8以上版本才有  api在试验阶段 
let fs = require('fs');
let fsPromise = fs.promises;
fsPromise.readFile('./a.txt','utf8').then(data=>{
	console.log(data);
});
fsPromise.writeFile('./a.txt','5678','utf8').then(data=>{
	console.log('写入成功')
})