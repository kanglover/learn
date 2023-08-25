
const babel = require('@rollup/plugin-babel').babel;
const resolve = require('@rollup/plugin-node-resolve').nodeResolve;
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const json = require('@rollup/plugin-json');
const typescript = require('@rollup/plugin-typescript');

const extensions = ['.js', '.ts'];
const commonPlugins = [
    resolve({
        extensions,
        browser: true
    }),
    commonjs(),
    json()
];
const babelES5Plugin = babel({
    exclude: ['node_modules'],
    extensions,
    babelHelpers: 'bundled'
});
const terserPlugin = terser();
const tsPlugin = typescript({
    exclude: 'node_modules/**',
    tsconfig: './tsconfig.json'
});

const inputFile = 'src/index.ts';

module.exports = [
    {
        input: inputFile,
        output: {
            file: 'dist/index.js',
            format: 'umd',
            name: ''
        },
        plugins: [
            ...commonPlugins,
            babelES5Plugin,
            terserPlugin
        ]
    },
    {
        input: inputFile,
        output: {
            file: 'dist/index.esm.js',
            format: 'es'
        },
        plugins: [
            ...commonPlugins,
            babelES5Plugin
        ]
    },
    {
        input: inputFile,
        output: {
            file: 'dist/index.es6.js',
            format: 'es'
        },
        plugins: [
            ...commonPlugins,
            tsPlugin
        ],
        external: ['']
    }
];
