module.exports={
	devServer:{
		proxy:'http://localhost:3000'
	// 	proxy:{
	// 	  '/':{
    //         target:'http://localhost:3000',
	// 		ws:false,
	// 		changeOrigin:true,
	// 		pathRewrite:{
	// 			'^/':''
	// 		}
	// 	  }
	// 	}
	 }
}
// proxy 代理
// '/' 是我要代理的路径 
// target目标地址 访问 /的时候等于访问 http://localhost:3000
//changeOrigin 是否改变域名
//pathRewrite 路径重写
// ws  是否代理websocket 