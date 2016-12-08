/**
 * webpack 配置文件
 * Created by zhaoxiaoqiang on 2016/12/8.
 */

module.exports = {
    entry: {
        main: '/Users/zhaoxiaoqiang/code-git/vue2-lab/src/index.js'
    },

    output: {
        path: '/Users/zhaoxiaoqiang/code-git/vue2-lab/dist/',
        // publicPath: '/js/',
        filename: 'index.js'
    }
};