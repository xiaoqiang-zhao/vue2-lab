/**
 * 构建包，主要解决包依赖，将所以依赖的包打到一个js文件中
 *
 * Created by zhaoxiaoqiang on 2016/12/8.
 */

console.log('--- 打包 ---');
var webpack = require('webpack');
var webpackConfig = require('../config/webpack.config');

webpack(webpackConfig, function (err, stats) {
    // 打包完可以干一些事情
});