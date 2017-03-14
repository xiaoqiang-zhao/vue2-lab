/**
 * Created by zhaoxiaoqiang on 2017/3/10.
 */

/**
 * Module dependencies.
 */

const Koa = require('koa');
const app = new Koa();
const koaStatic = require('koa-static');
const koaAutoPathRouter = require('koa-auto-path-router');
const koaProxy = require('koa-proxy');

/**
 * Module config.
 */

const config = {
    port: 4000,
    index: 'index.html',
    // 是否开启远程代理，用于联调
    isProxy: false,
    proxyUrl: 'http://127.0.0.1:5000',
    mockUrl: './mock/'
};

// 静态文件支持
app.use(koaStatic('./dist/', {
    index: config.index
}));

if (config.isProxy) {
    app.use(koaProxy({
        host: config.proxyUrl
    }));
}
else {
    app.use(koaAutoPathRouter(config.mockUrl));
}

app.listen(config.port);

console.log('服务已启动: localhost:' + config.port);