// 装饰器工厂
function color(value: string) { // 这是一个装饰器工厂
    return function (target: any) { //  这是装饰器
        // do something with "target" and "value"...
    }
}
@color('red')
class colorClass {
}

// 类装饰器
// 重载构造器
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeterd {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeterd("world"));


// 属性装饰器
// params 是装饰器传入的参数
function propertyKey(params: any) {
    // target 是原型对象，attr 是属性名
    return function (target: any, attr: any) {
        target[attr] = params;
    }
}

class PropertyKeyDescriptor {
    @propertyKey('默认值')
    public prop: string | undefined;
}

// 方法装饰器
function enumerable(value: boolean) {
    // target 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    // propertyKey 成员的名字/方法名。
    // descriptor 成员的属性描述符。
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Greeters {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}


// 参数装饰器

function required(params: any) {
    // 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    // 2、方法的名字。
    // 3、参数在函数参数列表中的索引。
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {

    }
}

class Greeterc {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(@required('') name: string) {
        return "Hello " + name + ", " + this.greeting;
    }
}