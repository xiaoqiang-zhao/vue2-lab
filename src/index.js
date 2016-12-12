/**
 * 页面入口文件
 *
 * Created by zhaoxiaoqiang on 2016/12/8.
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
var routerConfig = require('./router-config');

var router = new VueRouter({
    transitionOnLoad: false,
    routes: routerConfig
});

Vue.use(VueRouter);

new Vue({
    router: router
}).$mount('#app');