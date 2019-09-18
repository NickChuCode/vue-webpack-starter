const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
    return path.join(__dirname, '../', dir)
}

module.exports = {
    // webpack 4 中开始引入 mode 配置，可以配置 development, production。
    // webpack 会默认进行一些定制化，比如在 production 模式下进行代码压缩或者图片优化等
    // webpack 4 中开始引入 mode 配置，可以配置 development, production。
    mode: 'development',
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        // [name]: 模块的名称，入口如果是字符串，默认为 main，如果是对象，默认为属性名
        // [hash]: hash 值，hash:8 表示 8 位 hash 值
        // [chunkhash]: 模块不变，hash 值不变
        // [contenthash]: 解决 chunkhash 的一些 CSS 相关问题
        filename: "[name]-[hash:8].js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')

        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')], // 指定检查的目录
                options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
                    formatter: require('eslint-formatter-friendly') // 指定错误报告的格式规范
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        })
    ]
}
