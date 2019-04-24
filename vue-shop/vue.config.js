module.exports = {
  devServer: {
       proxy: { // 配置跨域
            '/': {
　　　　　　　　　　//要访问的跨域的api的域名
                target: 'http://localhost:3000',
                changOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
  }
}