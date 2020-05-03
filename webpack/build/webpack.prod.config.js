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
    // 模式 生产模式下会自动 tree shaking 去掉无用代码
    // "sideEffects": false 代码没有副作用在构建时会自动删除

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

        // 解决缓存问题，不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。
        // [hash]: 每次wepack构建时会生成一个唯一的hash值，但如果只修改了一个文件，所有文件名都会更改
        // [chunkhash]：根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样（js和css）
        // [contenthash]: 根据文件的内容生成hash值。不同文件hash值一定不一样
        filename: 'js/[name].[chunkhash:7].js',
        path: resolve(__dirname, '../dist'),
        // 代码中实现 require.ensure 或者 import() 实现打包分离，异步按需加载
        chunkFilename: 'js/[id]_chunk.js', // 非入口chunk的名称
    },

    // 解析模块的规则
    resolve: {
        // 配置解析模块路径别名: 优点简写路径 缺点路径没有提示
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        // 配置省略文件路径的后缀名
        extensions: ['.js', '.json', '.jsx', '.css'],
        // 告诉 webpack 解析模块是去找哪个目录
        modules: [resolve(__dirname, '../node_modules'), 'node_modules']
    },

    // loader 配置
    module: {
        rules: [
            {
                oneOf: [
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
            }
        ]
    },
    // pulgins 配置
    plugins: [
        // 默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件进行重命名。contenthash 缓存策略
            filename: 'css/[name].[contenthash].css'
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin(),

        // 实现 PWA 技术
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    // devtool: false
    devtool: 'hidden-source-map',


    // 1. 可以将node_modules中代码单独打包一个chunk最终输出，如使用 jq
    // 2. 存在多入口chunk，会分析有没有公共的文件（如都使用到 jq）。如果有会打包成单独一个chunk

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    externals: {
        // 拒绝jQuery被打包进来
        jquery: 'jQuery'
    }
}