class Parent{
  constructor(){//构造函数 
    this.name = 'lili'
  }
  a = 1 //es7
  rename(){ //表示原型上面的方法  Parnet.prototye.rename =function(){}
     console.log(this.name +'abc')
  }
  //静态方法 表示在类上的方法 
  static add(a,b){ //Parnet.add = function(){}
     return a+b 
  }
}
let p = new Parent()
p.rename()

console.log(Parent.add(1,2))
console.log(p.a) //1 
//Promise.reject(err)
class Child extends Parent{
	constructor(){
		super()//继承的时候必须加super  
	}
}
let c = new Child()
console.log(c.name,c.a,'----')
