/**
 * @file 开放 SDK 编译配置
 * @author shaokang
 */

import resolve from '@rollup/plugin-node-resolve'; // 帮助寻找 node_modules 里的包
import babel from '@rollup/plugin-babel'; // rollup 的 babel 插件，ES6 转 ES5
// import replace from '@rollup/plugin-replace' // 替换待打包文件里的一些变量，如 process 在浏览器端是不存在的，需要被替换
import commonjs from '@rollup/plugin-commonjs'; // 将非 ES6 语法的包转为 ES6 可用
import {terser} from 'rollup-plugin-terser'; // 压缩包
import htmlTemplate from 'rollup-plugin-generate-html-template'; // 动态插入 js 到 html 中
import serve from 'rollup-plugin-serve'; // 本地服务器
import livereload from 'rollup-plugin-livereload'; // 热更新

const version = require('../package.json').version;
const env = process.env.NODE_ENV;

const banner = `/*!
 * rollup.js v${version}
 * rollup SDK
 */`;

const config = {
    input: 'src/entry/invoke-open.js',
    output: [
        {
            file: 'dist/swanInvoke.js',
            format: 'iife',
            name: 'swanInvoke',
            banner
        },
        {
            file: env === 'development' ? 'dist/rollup-demo.umd.js' : `dist/rollup-demo-${version}.umd.js`,
            format: 'umd',
            name: 'swanInvoke'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: /node_modules/,
            babelHelpers: 'runtime'
        })
    ]
};

if (env === 'development') {
    config.output.sourcemap = 'inline';
    config.plugins.push(
        htmlTemplate({
            template: './demo/index.html'
        }),
        livereload(),
        serve({
            open: true,
            contentBase: ['dist', 'demo'],
            port: 8999
        })
    );
}

if (env === 'production') {
    // 生产环境下多编译一份带版本号的产物
    config.output.push({
        file: `dist/swanInvoke-${version}.js`,
        format: 'iife',
        name: 'swanInvoke',
        banner
    });

    config.plugins.push(
        terser()
    );
}

export default config;
