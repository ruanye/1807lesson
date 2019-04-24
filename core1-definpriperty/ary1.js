// 数组的方法不能通过defineProperty 来检测更新 所以vue重写了数组的方法  push pop shift ...
let ary = [1,2,3,4]
let methods = ['push','pop','shift']
methods.forEach(method=>{
	let oldmethod = Array.prototype[method];
	// 重写数组方法
	Array.prototype[method]=function(...arg){
       console.log('值更新了')
	   oldmethod.call(this,...arg)
	}
})
ary.pop(7)