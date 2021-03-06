const ts: string = '你好ts';
console.log(ts);

// （一）引用 xxx.js 的变量的方法，需要先指定声明文件 xxx.d.ts

// 1. 通过 script 标签引入声明文件提供的全局变量
// console.log(labName);
// jQuery('#foo');

// 2. 通过模块化导入
import { name } from './module';
console.log(name);
// var foo = require('./module').foo;
// console.log(foo());

// 3. 引入 npm 包下 @types/moment 下的 index.d.ts
/// <reference types='moment'/>
// console.log(moment);

// 4. 修改全局的模块，只针对一些全局的属性（如增加 string 原型的属性方法）
// import './jQuery.js'
// const name = 'jQuery-Modules';
// console.log(name.getFirstLetter());


// （二）使用第三方库 xx.js 没有声明文件，需要下载 @types/xx 或者自己定义
// 需要在 tsconfig.json 中配置 path 路径，指定声明文件，严格模式下声明文件和库名相同
import indexOf = require('indexof');
console.log(indexOf([1,2], 2));
