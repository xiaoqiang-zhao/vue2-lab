/**
 * 路由配置文件
 *
 * Created by zhaoxiaoqiang on 2016/12/11.
 */

var PageA = require('./page/page-a');
var PageB = require('./page/page-b');

module.exports = [
    {
        path: '/',
        component: PageA
    },
    {
        name: 'pageA',
        path: '/page/a',
        component: PageA
    },
    {
        name: 'pageB',
        path: '/page/b',
        component: PageB
    }
];