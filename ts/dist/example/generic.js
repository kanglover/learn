"use strict";
// 泛型函数
function identity(arg) {
    return arg;
}
// 定义泛型变量
var myIdentity1 = identity;
var myIdentity2 = identity;
var myIdentity = identity;
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({ length: 10, value: 3 });
// 在泛型约束中使用类型参数
function getProperty(obj, key) {
    return obj[key];
}
var property = { a: 1, b: 2, c: 3, d: 4 };
getProperty(property, "a"); // okay
// getProperty(property, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// 在泛型里使用类类型
function create(c) {
    return new c();
}
