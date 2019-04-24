## vue项目
目录 
views文件夹 页面级组件
app.vue  根组件 
mains 主入口 webpack配置的
router.js 路由配置文件 
assets文件夹 放静态资源
components文件夹 放公共组件(基础组件)

1. 运行项目 
npm run serve 
2. 打包项目
npm run build 
运行完成后会多一个dist文件夹 这个是最后上线用的  要在服务端运行 
3. (额外)npm install 
http-server -g  global 全局  在文件夹下面运行http-server 自动把目录下的index.html 当做首页 
4. es6的模块语法  导出和引入的东西都是一个对象 moudle(对象) 
import 表示引入 必须是通过export导出的
export 表示导出 
export default 默认导出 
5. 我们可以把每个.vue文件看成一个组件 // @ is an alias to /src  @符号是/src的别名
6.组件的使用三部曲 
1） 通过import 引入组件
2)  在components里面注册
3） 用标签的形式使用
7. props传值默认值如果是数组或者对象的时候必须用函数
8. 配置路由跳转
1) router-link 写跳转路径 
2) 建立路由对应的.vue文件
3) 配置rouer.js  
9. 路由懒加载 
通过箭头函数和import方式直接使用  
10. spa应用 单页面应用 
11. 使用字体图标 https://www.iconfont.cn/ 
首页 列表页 购物车 返回  个人中心
1) css引入 放在asset 文件夹里面  引入的时候用 ./ 
2) import 作为模块导入 
12. 路由激活的样式 router-link-exact-active router-link-active 
exact 严格匹配 
13. 导航组件 
导航越来越多的时候 需要怎么处理 抽离成公共组件
style lang="less" 表示使用什么方式的css预处理语言  scoped 表示只对当前组件生效
14. 组件化的好处 可复用 可组合 可维护  
15. 轮播图组件 在src同级目录下建立一个mock文件夹或者其他任何位置都可以 mock文件夹用来放我们的mock数据mock 里面的代码和前端代码是没有任何关系的 
16. ajax请求配置
1）在src 文件夹下面建api/ajax文件夹 这里面放所有的请求 方便管理 
在api 文件夹下面建立一个index.js 
只要有index.js  index.js会被作为默认的入口 写的时候可以省略
import {} from '../api' = '../api/index.js'
2）npm install axios 
3) export let getBanner 等于导出一个key，value相对应的对象 
17. mockjs app.js 添加跨域配置(cors 跨域资源共享)
```
 //允许哪个域名跨域 
		res.setHeader('Access-Control-Allow-Origin',"*");
    //允许哪个方法跨域
    res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
    //预检测存活时间，单位是s
    res.setHeader('Access-Control-Max-Age',6)
    if(req.method==='OPITIONS'){
       res.end()//OPITIONS请求不做任何处理
    }
```
18. 轮播图 地址：https://github.com/surmon-china/vue-awesome-swiper
下载 npm install vue-awesome-swiper --save

##报错 
1. can not find moudle 
路径引错 或者文件不存在(范康文)




