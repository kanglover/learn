module.exports = {
    presets: [
        [
            // 使用 @babel/preset-env 根据 useBuiltIns 实现 polyfill 的按需加载
            '@babel/preset-env',
            {
                // usage 按需加载会参考 browserslist 和 代码引入。但会造成全局污染，忽略node_modules 时如果第三方包未转译则会出现兼容问题
                // entry 根据 browserslist 引入 polyfill
                useBuiltIns: 'usage',
                // 指定core-js版本。 下载 core-js@3
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


    // @babel/preset-env 和 @babel/runtime 各有特点，都可以实现按需加载
    // 使用 @babel/runtime 这种方式会借助 helper function 来实现特性的兼容 
    // @babel/plugin-transform-runtime，以沙箱垫片的方式防止污染全局，适合类库中使用，但实例方法无法正常使用。
    /*     presets: [
            ["@babel/preset-env"]
        ],
        plugins: [
            // 下载 @babel/runtime-corejs3
            [
                "@babel/plugin-transform-runtime", {
                    "corejs": 3
                }
            ]
        ] */

        // 以前方法二选其一就行，如果构建整个应用可以不需要 @babel/plugin-transform-runtime 插件
        // useage 和 @babel/runtime 也可以一起使用，按照plugins --> presets 顺序， preset-env 得到了 @babel/runtime 使用帮助函数包装后的代码，而 useage 又是检测代码使用哪些新特性来判断的，所以它拿到手的只是一堆 帮助函数，自然没有效果了
};