const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
        // filename: '[name].js',
    },
    devServer: {
        port: 8000
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    devtool: process.NODE_ENV === 'production' ? false : 'cheap-module-eval-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../src/jQuery.js'),
            to: path.resolve(__dirname, '../dist')
        }])
    ]
};
