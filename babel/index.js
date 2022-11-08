//index.js
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import { fun1 } from "./main";
// export class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

new Promise(function (resolve, reject) {
    resolve(100);
});

// [1, 2, 3, 4, 5].copyWithin(0, 3);

// export function test() {
//     console.log('test');
// }

// fun1();
async function async1(){
    console.log('async1 start');
    await async2();
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
console.log('script start');
async1();
console.log('script end')
