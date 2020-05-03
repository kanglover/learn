const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 配置基础目录，用于从配置中解析入口起点(entry point)和 loader、plugins
    context: resolve(__dirname, '../'),
    // 入口文件 设置 context 此时当前目录是 __dirname 上一级，因此能找到 index.js
    entry: {
        // app 是入口文件/模块的名字，单个入口文件可以省略。 
        app: './src/index.js'
    },
    // entry: './src/index.js',

    // join 将路径相连，可以跨系统，Win 用 ‘\’， Unix 用 ‘/’
    // entry: join(__dirname, '..', 'src', 'index.js'),

    // entry: resolve('./src', 'index.js'),

    // 输出
    output: {
        // 所有资源引入公共路径前缀 --> 'imgs/a.jpg' --> '/assets/imgs/a.jpg'
        // publicPath: "/assets/",

        // 输出文件名，[name]: 模块名称，这里即 app。[hash]: 模块标识符 [id] 的 hash
        filename: 'main.js',
        // 输出路径 __dirname 代表当前文件的路径
        // resolve 从右向左解析直到构建一个绝对路径，到最后未生成绝对路径，则再加上当前工作目录。/ 代表根目录，遇到后不再向前解析，前面加上当前的系统盘C、D ...
        path: resolve(__dirname, '../dist')
    },
    // loader 配置
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 开启缓存 让第二次打包构建速度更快
                    cacheDirectory: true
                }
            },
            {
                // 匹配的文件
                test: /\.css$/,
                // 使用多个 loader，如果是单个可以省略，把内容拿出来
                use: [
                    // use 数组中 loader 执行顺序：从右到左，从下到上

                    // 先创建 style 标签，再把 js 中的样式资源添加进去
                    'style-loader',
                    // 将 css 文件变成 common.js 模块加到输出的 js 中，内容就是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 处理图片，但只能处理 css 中的图片，处理不了 html 中引入的图片
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    // 需要下载 url-loader file-loader
                    {
                        loader: 'url-loader',
                        options: {
                            // 当图片大小小于 8Kb，就被处理成 base64，来减少请求数量
                            // 当图片大于 limit，会调用 file-loader 对图片进行处理
                            limit: 8 * 1024,

                            // 给图片进行重命名
                            // [name] 原来的名字
                            // [hash:10]取图片的hash的前10位
                            // [ext]取文件原来扩展名
                            name: '[name].[hash:10].[ext]',
                            // 增加输出目录
                            outputPath: 'imgs'
                        },
                    },
                ],
            },
            // 处理 html 中的图片
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            // 处理其他资源文件
            {
                exclude: /\.(css|js|html|less)$/,
                // 可以省略 use
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    // pulgins 配置
    plugins: [
        // 默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}