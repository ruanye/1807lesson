let http = require('http');
let url = require('url')
let fs  = require('fs')
let fsPromise = fs.promises;
function readjosn(path){
 return fsPromise.readFile(path,'utf8').then(data=>{
    return JSON.parse(data) 
 })
}
function writeJson(path,data){
  return fsPromise.writeFile(path,JSON.stringify(data),'utf8')
}

// 引入轮播图数组
let banner = require('./banner')
http.createServer((req,res)=>{
	  //允许哪个域名跨域 
		res.setHeader('Access-Control-Allow-Origin',"*");
    //允许哪个方法跨域
    res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
    res.setHeader('Access-Control-Allow-Headers','*')
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
    readjosn('./good.json').then(data=>{
     let hotdata = data.slice(0,6);
     setTimeout(()=>{
        res.end(JSON.stringify({
        code:200,
        data:hotdata
      }))
     },
     10000)
    })
    return
  }
  // 分页接口  http://localhost:3000/list?page=1
  if(pathname==='/list'){
     let page= parseInt(query.page); //取出前端传过来的页数
    //把所有的数据拿出来  第一页1 1-5 第二页 5-10   page 
    // page=0 0 5   page=1 5 10  
    readjosn('./good.json').then(data=>{
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
  // 详情页面请求http://localhost:3000/detail?id=33000
  if(pathname==='/detail'){
    let id = query.id;
    readjosn('./good.json').then(data=>{
       let single =data.find(item=>item.id==id)
       if(!single){
         res.end(JSON.stringify({
           code:201,
           data:{}
         }))
         return
       }
       res.end(JSON.stringify({
         code:200,
         data:single
       }))
    })
    return 
  }
  // 定义购物车列表接口 http://localhost:3000/carlist
   if(pathname=='/carlist'){
     readjosn('./car.json').then(data=>{
       res.end(JSON.stringify({
         code:200,
         data
       }))
     })
     return
   }
  // 添加购物车接口http://localhost:3000/carlist
  if(pathname=='/addcar'){
    let str ='';
    // 请求监听数据
    req.on('data',chunk=>{
      str+=chunk;
    });
    // 请求结束
    req.on('end',()=>{
       // adData 传过来的数据
        //  判断传进来的参数不存在
         if(str==''){
           res.end(JSON.stringify({
            code:201,
            msg:'参数错误'
          }))
          return
        }
        let adData = JSON.parse(str);
        if(!adData.id&&adData.id!=0&&!adData.name){
          res.end(JSON.stringify({
            code:201,
            msg:'参数错误'
          }))
          return
        }
        readjosn('./car.json').then(data=>{
         let  newData; //最后写入的数据
          // 看购物车有没有这条数据
         let singledata = data.find(item=>item.id ==adData.id)
        //  有的话数量加1，没有的话数量等于1
        if(singledata){
           singledata.count++;
           newData=[...data]
        }else{
          adData.count=1;
          newData = [...data,adData]
        }
        // 把最后的数据写到car.json里面 
         writeJson('./car.json',newData).then(()=>{
           res.end(JSON.stringify({
              code:200,
              msg:'添加成功'
            }))
         })
       })
    })
    return
  }
   
  res.end('404')
}).listen(3000)
//