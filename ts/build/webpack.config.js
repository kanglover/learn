const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js',
        // filename: '[name].js',// 生成的fiename需要与package.json中的main一致
    },
    devServer: {
        port: 8000,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            }
        ]
    },
    devtool: process.NODE_ENV === 'production' ? false : 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({template: 'index.html'})
    ]
}