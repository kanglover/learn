/**
 * @file private 编译
 */

import resolve from '@rollup/plugin-node-resolve'; // 帮助寻找 node_modules 里的包
import babel from '@rollup/plugin-babel'; // rollup 的 babel 插件，ES6 转 ES5
import commonjs from '@rollup/plugin-commonjs'; // 将非 ES6 语法的包转为 ES6 可用
import {terser} from 'rollup-plugin-terser'; // 压缩包
import htmlTemplate from 'rollup-plugin-generate-html-template'; // 动态插入 js 到 html 中
import serve from 'rollup-plugin-serve'; // 本地服务器
import livereload from 'rollup-plugin-livereload'; // 热更新

const env = process.env.NODE_ENV;
const TYPE = process.env.TYPE;
let buildOpts = {
    'umd': {
        file: 'dist/rollup-demo.js',
        format: 'umd'
    },
    'cjs': {
        file: 'dist/rollup-demo.common.js',
        format: 'cjs'
    },
    'esm': {
        file: 'dist/rollup-demo.esm.js',
        format: 'es'
    },
    'esm-browser': {
        file: 'dist/rollup-demo.esm.browser.js',
        format: 'es',
        // 不过 babel 编译
        transpile: false
    },
    'esm-import': {
        file: 'dist/rollup-demo.esm.import.js',
        format: 'es',
        transpile: false,
        external: true
    }
};

/**
 * 获取基础的 rollup 配置
 * @param {Object} input 参数
 * @return {Object} rollup config
 */
function getBaseConfig({file, format, transpile = true, external}) {
    return {
        input: 'src/entry/index.js',
        output: {
            file,
            format,
            name: 'rollup',
            exports: 'default'
        },
        plugins: [
            resolve(),
            commonjs(),
            transpile
                ? babel({
                    exclude: /node_modules/,
                    babelHelpers: 'runtime'
                })
                : ''
        ],
        external: external ? [''] : []
    };
}

/**
 * 根据开发环境获取完整的 rollup 配置
 *
 * @return {Object|Array} rollup config
 */
function getConfig() {
    if (env === 'development') {
        const config = getBaseConfig(buildOpts[TYPE]);
        config.sourcemap = 'inline';
        config.plugins.push(
            htmlTemplate({
                template: './demo/index.html'
            }),
            livereload(),
            serve({
                open: true,
                contentBase: ['dist', 'demo'],
                port: 9999
            })
        );
        return config;
    }

    // 生产环境编译所有的文件
    if (env === 'production') {
        return Object.keys(buildOpts).map(key => {
            const config = getBaseConfig(buildOpts[key]);
            config.plugins.push(
                terser()
            );
            return config;
        })
    }
}

export default getConfig();
