import './index.css';
import './index.less'
import count from './count';

console.log('index.js文件加载了~');

// 会进行打包分离，文件名是设置的 chunkFilename
import('./add').then(({ default: add }) => {
  console.log(add(1, 2));
});

console.log(count(3, 2));