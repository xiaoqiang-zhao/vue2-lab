/**
 * 页面入口文件
 *
 * Created by zhaoxiaoqiang on 2016/12/8.
 */
var Vue = require('vue');
var CompA = require('./components/a');
var CompB = require('./components/b');

new Vue({
    el: '#app',
    components: {
      compA: CompA,
      compB: CompB,
    },
    data: {
        name: 'test'
    }
});