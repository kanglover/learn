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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 装饰器工厂
function color(value) {
    return function (target) {
        // do something with "target" and "value"...
    };
}
var colorClass = /** @class */ (function () {
    function colorClass() {
    }
    colorClass = __decorate([
        color('red')
    ], colorClass);
    return colorClass;
}());
// 类装饰器
// 重载构造器
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeterd = /** @class */ (function () {
    function Greeterd(m) {
        this.property = "property";
        this.hello = m;
    }
    Greeterd = __decorate([
        classDecorator
    ], Greeterd);
    return Greeterd;
}());
console.log(new Greeterd("world"));
// 属性装饰器
// params 是装饰器传入的参数
function propertyKey(params) {
    // target 是原型对象，attr 是属性名
    return function (target, attr) {
        target[attr] = params;
    };
}
var PropertyKeyDescriptor = /** @class */ (function () {
    function PropertyKeyDescriptor() {
    }
    __decorate([
        propertyKey('默认值')
    ], PropertyKeyDescriptor.prototype, "prop", void 0);
    return PropertyKeyDescriptor;
}());
// 方法装饰器
function enumerable(value) {
    // target 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    // propertyKey 成员的名字/方法名。
    // descriptor 成员的属性描述符。
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var Greeters = /** @class */ (function () {
    function Greeters(message) {
        this.greeting = message;
    }
    Greeters.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        enumerable(false)
    ], Greeters.prototype, "greet", null);
    return Greeters;
}());
// 参数装饰器
function required(params) {
    // 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    // 2、方法的名字。
    // 3、参数在函数参数列表中的索引。
    return function (target, propertyKey, parameterIndex) {
    };
}
var Greeterc = /** @class */ (function () {
    function Greeterc(message) {
        this.greeting = message;
    }
    Greeterc.prototype.greet = function (name) {
        return "Hello " + name + ", " + this.greeting;
    };
    __decorate([
        __param(0, required(''))
    ], Greeterc.prototype, "greet", null);
    return Greeterc;
}());
