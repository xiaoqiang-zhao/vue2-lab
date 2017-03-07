/**
 * 页面入口文件
 *
 * Created by zhaoxiaoqiang on 2016/12/8.
 */
var Vue = require('vue');
var VueRouter = require('vue-router');

var router = new VueRouter({
    transitionOnLoad: false,
    routes: [
        {
            path: '/',
            component: require('./index.vue')
        },
        {
            path: '/slot',
            component: require('./slot')
        },
        {
            path: '/table',
            component: require('./table')
        }
    ]
});

Vue.use(VueRouter);

new Vue({
    router: router
}).$mount('#app');