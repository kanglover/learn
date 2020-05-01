module.exports = {
    presets: [
        [
            // 使用 @babel/preset-env 根据 useBuiltIns 实现 polyfill 的按需加载
            '@babel/preset-env',
            {
                // usage 按需加载会参考 browserslist 和 代码引入。但会造成全局污染，忽略node_modules 时如果第三方包未转译则会出现兼容问题
                // entry 根据 browserslist 引入 polyfill
                useBuiltIns: 'usage',
                // 指定core-js版本
                // corejs: 3,
                corejs: {
                    version: 3
                },
                // 指定兼容性做到哪个版本浏览器
                targets: {
                    chrome: '60',
                    firefox: '60',
                    ie: '9',
                    safari: '10',
                    edge: '17'
                }
            }
        ],
    ],


    // @babel/preset-env 和 @babel/runtime 二选一即可，各有特点
    // 使用 @babel/runtime 实现按需加载，不会污染全局，适合类库中使用，但实例方法无法正常使用。
    /*     presets: [
            ["@babel/preset-env"]
        ],
        plugins: [
            [
                "@babel/plugin-transform-runtime", {
                    "corejs": 3
                }
            ]
        ] */
};