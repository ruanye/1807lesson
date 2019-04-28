let fs  = require('fs')
let fsPromise = fs.promises;
function writeJson(path,data){
  return fsPromise.writeFile(path,JSON.stringify(data),'utf8')
}

writeJson('./car.json',[1,2]).then(data=>{
	console.log(11111)
})
