"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
// 直接传入对象会检查必须符合接口要求
printLabel({ label: '' });
// printLabel({ label: '', ss: '' }); // Error ss 不在接口定义中
// 使用对象地址只检查对象中是否包含定义的属性，不额外检查多余的属性
var al = { label: '', ss: '' };
printLabel(al);
// ts 具有 ReadonlyArray<T> 表示只读的数组
var array = [1, 2, 3, 4];
var ro = array;
function createSquare(config) {
    // ...
}
createSquare({ color: 'red', props: false });
var mySerach;
// 函数中的属性不一定要和接口定义的名字相同 source 可以为 src
mySerach = function (source, substring) {
    return source.search(substring) > -1;
};
var myArray = ['bob', 'fir'];
var mArray = ["Alice", "Bob"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.current = new Date(h);
    }
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;
// 接口继承类
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
// 子类会继承父类的属性 state，因此没问题，和下面的 Image 不一样
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Control));
// Error: Property 'state' is missing in type 'Image'.
// 必须要定义接口上的属性
// class Image implements SelectableControl {
//     select() { }
// }
