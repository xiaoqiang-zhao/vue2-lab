/**
 * webpack 配置文件
 * Created by zhaoxiaoqiang on 2016/12/8.
 */

module.exports = {
    entry: {
        main: './src/index.js'
    },

    output: {
        path: './dist/',
        filename: 'index.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
        extensions: ['', '.js', '.vue']
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    }
};