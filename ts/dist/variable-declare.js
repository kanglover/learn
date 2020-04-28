"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function func() {
    var a = 10;
    return function () {
        var b = a + 1;
        return b;
    };
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
function fun3(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
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
var _a = { a: 0, b: 0 }, newName1 = _a.a, newName2 = _a.b;
// 默认值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function declareFunc(_a) {
    var a = _a.a, b = _a.b;
}
function f1(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    // ...
}
f1(); // ok, default to { a: "", b: 0 }
function f2(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to {a: ""}, which then defaults b = 0
// f2({}); // error, 'a' is required if you supply an argument
var Class = /** @class */ (function () {
    function Class() {
        this.p = 12;
    }
    Class.prototype.m = function () {
    };
    return Class;
}());
var c1 = new Class();
var clone = __assign({}, c1);
clone.p; // ok
// clone.m(); // error!
