// 1. this 类型
class Counter {
    public constructor(public value: number = 0) { }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
}

class MyCounter extends Counter {
    public multiply(operand: number): this {
        this.value += operand;
        return this;
    }
}

const calc = new MyCounter(3).multiply(5).add(10);
console.log(calc.value);

// 2. 索引类型
const infoObj = {
    'name': 'kk',
    'age': 18
};

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(n => obj[n]);
}

const value: Array<string | number> = getValue(infoObj, ['name', 'age']);
console.log(value);

// keyof 可以用于获取某种类型的所有键
interface Type {
    a: never,
    b: never,
    c: string,
    d: number,
    e: undefined,
    f: null,
    g: object
}
type ke = keyof Type;
// 严格模式下 keyof 返回不为 never 类型，非严格模式 keyof 只会返回不为 null undefined never 的类型
type Test = Type[keyof Type];

interface Profile {
    name: string;
    gender: string;
    age: number;
}

type Profile1 = keyof Profile;
// 等价于 keyof Array<T>
type Profile2 = keyof Profile[];
type Profile3 = keyof { [x: string]: Profile };
// 等价 keyof string;
type Profile4 = keyof Profile['name'];


// 3. 字符串索引签名获取索引签名的类型。 
// key 的类型只能是 string 或者 number
interface Ikeys<T> {
    [key: string]: T,
}
// keys 类型是 string | number，因为 number 充当 key 时会转成 string
let keys: keyof Ikeys<boolean>;
//  keys 类型是 number
let keys1: Ikeys<number>['foo'];


// 4. 映射类型
interface Person {
    name: string,
    age: number,
    flag: boolean
}

// 只能用类型别名，接口无法定义 key 为泛型
type ReadOnlyType<T> = {
    [P in keyof T]: T[P]
}

let PersonReadOnly: ReadOnlyType<Person>;
PersonReadOnly = {
    name: 'kk',
    age: 18,
    flag: true
}
// 5. ts 映射类型 Readonly 只读， Partial 可选
let person1: Readonly<Person>;
let person2: Partial<Person>;
let person: Person = {
    name: 'kk',
    age: 18,
    flag: true
}

// Required 必须，可以移除 readonly
interface PersonPartial {
    name: string,
    age: number,
    flag?: boolean
}
let person3: Required<PersonPartial> = {
    name: 'kk',
    age: 18,
    flag: true // 必须要加
};

// Pick 部分
type personKey1 = 'name' | 'age'
let person4: Pick<Person, personKey1>;
person4 = {
    name: 'kk',
    age: 18
}
// Record
type personKey2 = 'a' | 'b'
let person5: Record<personKey2, Person> = {
    a: <Person>{},
    b: <Person>{}
}

// Exclude 差集
type T00T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"

// Extract 交集
type T00T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"

// NonNullable
type  T00T02 = NonNullable<string | null | undefined>;

// ReturnType
type T00T03 = ReturnType<() => string>;

// InstanceType
class Aclass {
}
type T00T04 = InstanceType<typeof Aclass>;

// + 增加（可直接写省略）或 - 移除特定修饰符

type removeReadOnly<T> = {
    -readonly [P in keyof T]: T[P]
}
interface PersonReadOnlys {
    readonly name: string,
    readonly age: number,
    readonly flag: boolean
}
let person6: Required<PersonReadOnlys> = {
    name: 'kk',
    age: 18,
    flag: true
};
console.log(person6.name); // 可访问

// unknow 类型 和 any 有点像，任何类型都可以赋值给 unknow，但是 unknow 只能赋值给 unknow 或者 any，但 any 可以复制给任何类型
let vUnknown: unknown;
let vAny: any;
vAny = vUnknown;
let value1: string = vAny;
// let value2: string = vUnknown; Error
vAny.method();
// vUnknown.method() Error

// 与正交类型搭配，不起作用
type T00 = unknown & null;  // null
type T01 = unknown & undefined;  // undefined

// 与联合类型的搭配 unknown 起绝对作用（除 any）
type T10 = unknown | null;  // unknown
type T11 = unknown | undefined;  // unknow
type T12 = unknown | any;  // any

// never 是 unknow 的子类 unknow 和 any 也是
type T20 = never extends unknown ? true : false
type T21 = keyof unknown

// unknow 只可以进行等或不等
vUnknown === vAny
// vUnknown += 1

// infer 推断类型
type InferType1<T> = T extends any[] ? T[number] : T; // T[number] 获取数组值
type T31 = InferType1<string[]>; // string

type InferType2<T> = T extends Array<infer U> ? U : T; // infer 推荐数组值的类型
type T32 = InferType2<string[]>; // string
