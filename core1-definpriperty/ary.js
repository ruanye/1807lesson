// 数组的方法不能通过defineProperty 来检测更新 所以vue重写了数组的方法  push pop shift ...
let ary = [1,2,3,4]
let oldpush  =Array.prototype.push;//把数组的方法存在oldpush上
Array.prototype.push=function(...arg){
  console.log('值更新了')
  oldpush.call(this,...arg)
}
ary.push(7)
