// 泛型函数
function identity<T>(arg: T): T {
    return arg;
}
// 定义泛型变量
let myIdentity1: <T>(arg: T) => T = identity;
let myIdentity2: {<T>(arg: T): T} = identity;

interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

// 泛型类
class GenericNumber<T> {
    // ! 非null和非undefined的类型断言
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型约束 extends
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({length: 10, value: 3});

// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let property = { a: 1, b: 2, c: 3, d: 4 };

getProperty(property, "a"); // okay
// getProperty(property, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 在泛型里使用类类型
function create<T>(c: {new(): T; }): T {
    return new c();
}