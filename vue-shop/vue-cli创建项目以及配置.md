1. ui界面创建项目
vue ui 
2. 命令行创建项目 步骤 
1）vue create '项目名字'
2）选择手动或者默认 
默认 default (babel, eslint)
手动 Manually select features 
3）选择手动之后  通过空格切换选中状态
 ◉ Babel  编译es6到es5
 ◯ TypeScript ts
 ◯ Progressive Web App  (PWA) Support PWA 渐进式WEB应用 
 ◯ Router   路由
 ◯ Vuex      vuex状态管理
 ◯ CSS Pre-processors  css预处理器
 ◉ Linter / Formatter  eslint(校验代码格式)
 ◯ Unit Testing  (测试 )
 ◯ E2E Testing
 
4. 是否使用history路由模式
Use history mode for router? (Requires pr
oper server setup for index fallback in pro
duction) (Y/n)
5. 选择css预处理器
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus
6. 设定配置文件的方式 
In dedicated config files (生成配置文件)
In package.json （集成到package.json里面）
在package.json 
脚本配置： npm run serve
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
}
