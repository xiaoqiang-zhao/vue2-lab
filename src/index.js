/**
 * 页面入口文件
 *
 * Created by zhaoxiaoqiang on 2016/12/8.
 */
var append = require('./append.js');

setTimeout(function () {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = '<h1>包管理能跑起来了</h1>';
  append.do(body, '子模块也能打到包里了');
}, 300);

module.exports = {
  name: 'test'
};