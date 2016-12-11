/**
 * webpack 配置文件
 * 注：只能在项目根文件运行npm脚本执行打包: npm run build-pack,
 *    如果想单独执行需要对路径配置升级
 *
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
        extensions: ['.js', '.vue']
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};