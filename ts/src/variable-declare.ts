function func() {
    var a = 10;
    return function() {
        var b = a + 1;
        return b;
    }
}
var g = func();
g(); // 11

function func2() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;

    return b;
    function g() {
        return a;
    }
}
func2(); // 2 调用g的时候 a的定义值是2

function fun3(input: boolean) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exits here
    // return b;
}

try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
// Error: 'e' doesn't exist here
console.log(e);

// ts 中依然有 let const 用法和 es6 一样

// 对象解构
// 属性重命名
let { a: newName1, b: newName2 } = {a: 0, b: 0};

// 默认值
function keepWholeObject(wholeObject: {a: string, b?: string}) {
    let {a, b = 1001} = wholeObject;
}

// 函数声明
type C = {a: string, b?: number};
function declareFunc({a, b}: C) {

}

function f1({ a, b } = { a: "", b: 0 }): void {
    // ...
}
f1(); // ok, default to { a: "", b: 0 }

function f2({ a, b = 0 } = { a: "" }): void {
    // ...
}
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to {a: ""}, which then defaults b = 0
// f2({}); // error, 'a' is required if you supply an argument

class Class {
    p = 12;
    m() {
    }
  }
  let c1 = new Class();
  let clone = { ...c1 };
  clone.p; // ok
  // clone.m(); // error!
