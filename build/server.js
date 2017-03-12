/**
 * Created by zhaoxiaoqiang on 2017/3/10.
 */

const config = {
    port: 4000
};

const Koa = require('koa');
const app = new Koa();
var koaStatic = require('koa-static');
var koaAutoPathRouter = require('./koa-auto-path-router');

// 静态文件支持
app.use(koaStatic('./dist/', {
    // index: 'index.html'
}));

app.listen(config.port);

console.log('服务已启动: localhost:' + config.port);