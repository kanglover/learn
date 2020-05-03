import './css/index.css';
import './css/index.less';
import { count } from './js/calc';
import './js/tree-shaking';

console.log('index.js文件加载了~');

// 会进行打包分离，文件名是设置的 output 中的 chunkFilename，也可以通过注释自己命名
import(/* webpackChunkName: 'add' */ './js/add').then(({ default: add }) => {
    console.log(add(1, 2));
});

document.getElementById('btn').onclick = function () {
    // 懒加载，等按钮点击后加载
    import(/* webpackChunkName: 'test' */'./js/calc').then(({ mul }) => {
        console.log(mul(4, 5));
    });

    // 预加载，等浏览器空闲时提前加载
    import(/* webpackChunkName: 'test', webpackPrefetch: true */'./js/calc').then(({ mul }) => {
        console.log(mul(4, 5));
    });
};

console.log(count(3, 2));

if (module.hot) {
    // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
    module.hot.accept('./count.js', function () {
        // 方法会监听文件的变化，一旦发生变化，其他模块不会重新打包构建。
        // 会执行后面的回调函数
        print();
    });
}

// 注册serviceWorker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          console.log('sw注册成功了~');
        })
        .catch(() => {
          console.log('sw注册失败了~');
        });
    });
  }