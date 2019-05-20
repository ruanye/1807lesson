##git 的安装与使用 
1. 安装 命令或者右键 git bash here
2. 初始用户名和邮箱(第一次安装)
设置用户名   
git config --global user.name "username" 
设置邮箱
git config --global user.email "55343581@qq.com"
3. 初始化git仓库，在你作为仓库的文件夹下面(一个文件夹只能用一次)
git init 
4. 添加文件到仓库
 <!-- 单个文件 -->
git add 文件.后缀名  
git add index.html 
<!-- 所有文件 -->
git add -A   -A表示all 添加所有文件
git add .
5. 提交文件到本地仓库
git commit -m'提交的内容'
例子：git commit -m'列表的内容更改'
6. git 添加远程仓库地址
git remote add origin  https://github.com/ruanye/first.git
查看远程仓库地址 git remote -v
7. 把项目提交的远程仓库
git push origin master 
<!-- 修改之后 -->
1. git add -A
2. git commit -m'注释修改或添加的内容'
3. git push origin master 
 
忽略项 
.gitignore  不提交的文件 

 






 





