// 1. 声明后导出
export declare const name: string;

// 2. 直接导出
// export const name: string;

// 3. 先声明多个变量，最后再用 export 一次性导出
// declare const moduleName: string;
// declare function getName(): string;
// interface 前是不需要 declare 的
// interface Options {
//     data: any;
// }
// export {
//     moduleName,
//     getName,
//     Options
// }

// 4. export namespace
// export namespace foo {
//     const name: string;
//     namespace bar {
//         function baz(): string;
//     }
// }

// 5. export default 注意，
// 只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出
// export default function func(): string;

// 6. export = (ts 推荐写法支持CommonJS和AMD的exports) 通过 import xx = require('xx') 引入
// export = foo;

// declare function foo(): string;