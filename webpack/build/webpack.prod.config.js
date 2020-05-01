const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        // 还需要在package.json中定义browserslist
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [require('postcss-preset-env')()]
        }
    }
];

module.exports = {
    // 模式
    mode: 'production',
    // 配置基础目录，用于从配置中解析入口起点(entry point)和 loader、plugins
    context: resolve(__dirname, '../'),
    // 入口文件 设置 context 此时当前目录是 __dirname 上一级，因此能找到 index.js
    entry: {
        // app 是入口文件/模块的名字，单个入口文件可以省略。 
        app: './src/index.js'
    },

    // 输出
    output: {
        // 所有资源引入公共路径前缀 --> 'imgs/a.jpg' --> '/assets/imgs/a.jpg'
        // publicPath: "/assets/",
        filename: 'main.js',
        path: resolve(__dirname, '../dist'),
        // 代码中实现 require.ensure 或者 import() 实现打包分离，异步按需加载
        chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称
    },
    // loader 配置
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            // 自动修复eslint的错误
                            fix: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [...commonCssLoader]
            },
            {
                test: /\.less$/,
                use: [...commonCssLoader, 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[name].[hash:10].[ext]',
                            // 增加输出目录
                            outputPath: 'imgs'
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            // 处理其他资源文件
            {
                exclude: /\.(css|js|html|less|png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    // pulgins 配置
    plugins: [
        // 默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // 压缩html代码
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件进行重命名
            filename: 'css/main.css'
            // filename: 'css/[name].css'
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ]
}