const express = require('express')
const axios = require('axios')
axios.defaults.headers.post['Content-Type']='application/json; charse=UTF-8'
axios.defaults.headers.get['Content-Type']='application/json; charse=UTF-8'

var app = express()

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

var server = app.listen(8089, () => {
	console.log('> ----port is running at 8089')
})

var apiRouter = express.Router()

apiRouter.get('/getPicList', (req, res) => {
	console.log('进入接口qq')
	var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	axios.get(url, {
		headers: {
			referer: 'https://m.y.qq.com/',
			authority: 'c.y.qq.com'
		},
		params: req.query
	}).then((response) => {
		res.json(response.data)
	}).catch((e) => {
		console.error(e)
	})
})

// 番剧索引
apiRouter.get('/getBiliBili',(req,res) => {
	console.log('进入接口bl')
	var url = 'https://bangumi.bilibili.com/media/web_api/search/result'
	axios.get(url, {
		headers: {
			Host:'bangumi.bilibili.com',
			Origin: 'https://www.bilibili.com',
			Referer: 'https://www.bilibili.com/anime/index/'
		},
		params: req.query
	}).then((response) => {
		res.json(response.data)
	}).catch((e) => {
		console.error(e)
	})
})

app.use('/api', apiRouter)


// proxy api requests

// proxy 中间件的选择项
// var options = {
// 	target: 'http://localhost:8089', // 目标服务器 host
// 	changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
// 	ws: true,                         // 是否代理websockets
// 	pathRewrite: {
// 		'^/api' : '/api',     // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
// 		'^/api/remove/path' : '/path'           // 同上
// 	},
// 	router: {
// 		// 如果请求主机 == 'dev.localhost:3000',
// 		// 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'
// 		'http://localhost:3000' : 'http://localhost:8089'
// 	}
// };
//
// // 创建代理
// var exampleProxy = proxy(options);
// app.use('/api', exampleProxy)

var _resolve
var readyPromise = new Promise(resolve => {
	_resolve = resolve
})

module.exports = {
	ready: readyPromise,
	close: () => {
		server.close()
	}
}