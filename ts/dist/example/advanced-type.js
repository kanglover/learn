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
// 1. this 类型
var Counter = /** @class */ (function () {
    function Counter(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    Counter.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    return Counter;
}());
var MyCounter = /** @class */ (function (_super) {
    __extends(MyCounter, _super);
    function MyCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyCounter.prototype.multiply = function (operand) {
        this.value += operand;
        return this;
    };
    return MyCounter;
}(Counter));
var calc = new MyCounter(3).multiply(5).add(10);
console.log(calc.value);
// 2. 索引类型
var infoObj = {
    'name': 'kk',
    'age': 18
};
function getValue(obj, names) {
    return names.map(function (n) { return obj[n]; });
}
var value = getValue(infoObj, ['name', 'age']);
console.log(value);
// keys 类型是 string | number，因为 number 充当 key 时会转成 string
var keys;
//  keys 类型是 number
var keys1;
var PersonReadOnly;
PersonReadOnly = {
    name: 'kk',
    age: 18,
    flag: true
};
// 5. ts 映射类型 Readonly 只读， Partial 可选
var person1;
var person2;
var person = {
    name: 'kk',
    age: 18,
    flag: true
};
var person3 = {
    name: 'kk',
    age: 18,
    flag: true // 必须要加
};
var person4;
person4 = {
    name: 'kk',
    age: 18
};
var person5 = {
    a: {},
    b: {}
};
// InstanceType
var Aclass = /** @class */ (function () {
    function Aclass() {
    }
    return Aclass;
}());
var person6 = {
    name: 'kk',
    age: 18,
    flag: true
};
console.log(person6.name); // 可访问
// unknow 类型 和 any 有点像，任何类型都可以赋值给 unknow，但是 unknow 只能赋值给 unknow 或者 any，但 any 可以复制给任何类型
var vUnknown;
var vAny;
vAny = vUnknown;
var value1 = vAny;
// let value2: string = vUnknown; Error
vAny.method();
// unknow 只可以进行等或不等
vUnknown === vAny;
