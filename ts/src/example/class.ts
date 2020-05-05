class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);

        //  子类在构造函数里访问this的属性之前，我们一定要调用super()
    }
    bark() {
        console.log('Woof! Woof!');
    }
}

// ts 有 public private protected readonly
// public
class Animals {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Animalss {
    // 构造函数中把声明和赋值合在一起，所以不用再声明
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// 存取器
class Employee {
    private _fullName: string;

    constructor(fullName: string) {
        this._fullName = fullName;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }
}

// 静态属性
class Grid {
    static origin = { 'x': 0, 'y': 0 };
    calc(point: {x: number, y: number}) {
        const xDist = point.x - Grid.origin.x;
    }
}

// 抽象类
abstract class Animal1 {
    abstract makeSound(): void;
    move(): void {
        console.log('rom');
    }
}

abstract class Department {
    constructor(public name: string) {

    }
    printName(): void {
        console.log();
    }

    // 必须在派生类中实现
    abstract printMetting(): void;
}

class AccountDepartment extends Department {
    constructor() {
        super('Account and Auditing');
    }

    printMetting(): void {
        console.log('The Account Deparement');
    }
}

let accountDep: AccountDepartment;
accountDep = new AccountDepartment();

// 定义类型 实例和对象的区别
class Greeter {
    static standardGreeting = 'Hello, there';
    greeting: string = 'hello';
    greet() {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }

        return Greeter.standardGreeting;
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
greeter1.greet();

// typeof 是取 Greeter 类的类型不是实例的类型
const greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = 'Hey';

// 把类当成接口使用
class Point {
    x1: number = 1;
    y1: number = 1;
}

interface Point3d extends Point {
    z: number;
}
