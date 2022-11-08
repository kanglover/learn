// webpack.config.js
const { resolve } = require('path');

module.exports = {
  mode: 'production',
  entry: resolve(__dirname, './index.js'),
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     use: [
    //       {
    //         // loader: 'babel-loader',
    //         // options: {
    //         //   presets: ['@babel/preset-env'],
    //         // },
    //       },
    //     ],
    //   },
    // ],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
  },
};

