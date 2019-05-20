let a = [1,2,3,4,5,6,]
let res = [];
let len = a.length%4==0?a.length/4:Math.floor(a.length/4+1)
len 
for(let i=0;i<len;i++){
  let tem = a.slice(i*4,i*4+4)
  res.push(tem)
}
res


