"use strict";
/** typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型
        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        
        任意类型（any）
        null 和 undefined
        void类型
        never类型

*/
//布尔类型（boolean）
var flag = true;
// flag = 123;  //错误
flag = false; //正确
console.log(flag);
// 数字类型（number）
var num = 123;
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; // 十六进制
var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
console.log(num);
// 字符串类型(string）
var str = 'this is ts';
str = 'haha'; //正确
var namestr = 'bob';
var age = 23;
var sentence = "hello, my name is " + name + ".\nI will be " + (age + 1) + " years old next month";
//str = true;  //错误
// 数组类型（array）  ts中定义数组有两种方式
// 1.第一种定义数组的方式
var arr = [11, 22, 33];
var list = [1, 2, 3];
var lists = [1, 2, 3];
console.log(arr);
//2.第二种定义数组的方式
var arr2 = [11, 22, 33];
console.log(arr2);
//3、第三种
var arr3 = ['131214', 22, true];
console.log(arr3);
// 元组类型（tuple）  属于数组的一种
var arr4 = [123, 'this is ts'];
console.log(arr);
var x;
x = ['hello', 1];
x[0].substr(1);
// 枚举类型（enum）
/*        enum 枚举名{
            标识符[=整型常数],
            标识符[=整型常数],
            ...
            标识符[=整型常数],
        };
*/
var Flag1;
(function (Flag1) {
    Flag1[Flag1["success"] = 1] = "success";
    Flag1[Flag1["error"] = 2] = "error";
})(Flag1 || (Flag1 = {}));
;
var s = Flag1.success;
console.log(s);
var Flag2;
(function (Flag2) {
    Flag2[Flag2["success"] = 1] = "success";
    Flag2[Flag2["error"] = 2] = "error";
})(Flag2 || (Flag2 = {}));
;
var f = Flag2.error;
console.log(f);
var Color1;
(function (Color1) {
    Color1[Color1["blue"] = 0] = "blue";
    Color1[Color1["red"] = 1] = "red";
    Color1[Color1["orange"] = 2] = "orange";
})(Color1 || (Color1 = {}));
;
var c = Color1.red;
console.log(c); //1  如果标识符没有赋值 它的值就是下标
var Color2;
(function (Color2) {
    Color2[Color2["blue"] = 0] = "blue";
    Color2[Color2["red"] = 3] = "red";
    Color2[Color2["orange"] = 4] = "orange";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.red;
console.log(c2); //3
var c3 = Color2.orange;
console.log(c3); //4
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
;
var e = Err.success;
console.log(e);
// 任意类型（any）
var number = 123;
number = 'str';
number = true;
console.log(num);
//任意类型的用处
var oBox = document.getElementById('box');
oBox.style.color = 'red';
// null 和 undefined  其他（never类型）数据类型的子类型
var num;
console.log(num); //输出：undefined   报错
var num0;
console.log(num); //输出：undefined  //正确
var num1;
num = 123;
console.log(num);
//定义没有赋值就是undefined
var num2;
console.log(num);
var num3;
num3 = null;
//一个元素可能是 number类型 可能是null 可能是undefined
var num4;
num4 = 1234;
console.log(num4);
// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
//正确写法
function run() {
    console.log('run');
}
run();
// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
//这意味着声明never的变量只能被never类型所赋值。
var a;
// a = 123; //错误的写法
a = (function () {
    throw new Error('错误');
})();
// 类型断言
var someValue = 'this is a string';
var strLength = someValue.length;
var strLen = someValue.length;
