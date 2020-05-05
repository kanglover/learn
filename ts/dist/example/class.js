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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
        //  子类在构造函数里访问this的属性之前，我们一定要调用super()
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
// ts 有 public private protected readonly
// public
var Animals = /** @class */ (function () {
    function Animals(theName) {
        this.name = theName;
    }
    Animals.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animals;
}());
var Animalss = /** @class */ (function () {
    // 构造函数中把声明和赋值合在一起，所以不用再声明
    function Animalss(name) {
        this.name = name;
    }
    Animalss.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animalss;
}());
// 存取器
var Employee = /** @class */ (function () {
    function Employee(fullName) {
        this._fullName = fullName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
// 静态属性
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.calc = function (point) {
        var xDist = point.x - Grid.origin.x;
    };
    Grid.origin = { 'x': 0, 'y': 0 };
    return Grid;
}());
// 抽象类
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function () {
        console.log('rom');
    };
    return Animal1;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log();
    };
    return Department;
}());
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super.call(this, 'Account and Auditing') || this;
    }
    AccountDepartment.prototype.printMetting = function () {
        console.log('The Account Deparement');
    };
    return AccountDepartment;
}(Department));
var accountDep;
accountDep = new AccountDepartment();
// 定义类型 实例和对象的区别
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.greeting = 'hello';
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        return Greeter.standardGreeting;
    };
    Greeter.standardGreeting = 'Hello, there';
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
greeter1.greet();
// typeof 是取 Greeter 类的类型不是实例的类型
var greeterMaker = Greeter;
greeterMaker.standardGreeting = 'Hey';
// 把类当成接口使用
var Point = /** @class */ (function () {
    function Point() {
        this.x1 = 1;
        this.y1 = 1;
    }
    return Point;
}());
