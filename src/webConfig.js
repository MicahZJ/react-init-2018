let api;
let redis_option;
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
    ///正式环境api接口地址
    api = {
        apiURL: '/',
        publicPath: '/',
        rootUrl: '/',
        apiPath: '/',
        staticPath: '/',
    }
} else if (process.env.NODE_ENV === 'development') {
    api = {
        apiURL: '/', 
        publicPath: '/',
        rootUrl: '/',
        apiPath: '/',
        staticPath: '/',

    }
} else {
    //开发环境配置
    api = {
        apiURL: '/', 
        publicPath: '/',
        rootUrl: '/',
        testUrl: 'http://localhost:8080/',
        staticPath: '/',
        apiPath: '/'
    }
}

const config = {
    port: 3000,
    api: api,
    rootUrl: api.rootUrl,
    redis_option: redis_option,
    publicPath: api.publicPath,
    staticPath: api.staticPath,
    apiPath: api.apiPath
};
module.exports = config