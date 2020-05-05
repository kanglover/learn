// typeScript中的数据类型
// 布尔类型（boolean）
// 数字类型（number）
// 字符串类型(string)
// 数组类型（array）
// 元组类型（tuple）
// 枚举类型（enum）
// 任意类型（any）
// null 和 undefined
// void类型
// never类型


//  布尔类型（boolean）
let flag: boolean = true;

// flag = 123;  //错误

flag = false;
console.log(flag);

// 数字类型（number）

const decLiteral: number = 6; // 十进制
const hexLiteral: number = 0xf00d; // 十六进制
const binaryLiteral: number = 0b1010; // 二进制
const octalLiteral: number = 0o744; // 八进制


// 字符串类型(string）

let str: string = 'this is ts';
str = 'haha'; // 正确

const namestr: string = 'bob';
const age: number = 23;
const sentence: string = `hello, my name is ${name}.
I will be ${age + 1} years old next month`;

// str = true;  //错误



// 数组类型（array）  ts中定义数组有两种方式

// 1.第一种定义数组的方式



const arr: number[] = [11, 22, 33];
const list: number[] = [1, 2, 3];
const lists: Array<number> = [1, 2, 3];

console.log(arr);

// 2.第二种定义数组的方式

const arr2: Array<number> = [11, 22, 33];
console.log(arr2);

// 3、第三种
const arr3: any[] = ['131214', 22, true];
console.log(arr3);


// 元组类型（tuple）  属于数组的一种

const arr4: [number, string] = [123, 'this is ts'];
console.log(arr);

let x: [string, number];
x = ['hello', 1];
x[0].substr(1);

// 枚举类型（enum）

// enum 枚举名{
// 标识符[=整型常数],
// 标识符[=整型常数],
// ...
// 标识符[=整型常数],
// };



enum Flag1 { success = 1, error = 2 };
const s: Flag1 = Flag1.success;
console.log(s);

enum Flag2 { success = 1, error = 2 };
const f: Flag2 = Flag2.error;
console.log(f);


enum Color1 { blue, red, 'orange' };
const c: Color1 = Color1.red;
console.log(c); // 1  如果标识符没有赋值 它的值就是下标

enum Color2 { blue, red = 3, 'orange' };
const c2: Color2 = Color2.red;
console.log(c2); // 3

const c3: Color2 = Color2.orange;
console.log(c3); // 4


enum Err { 'undefined' = -1, 'null' = -2, 'success' = 1 };
const e: Err = Err.success;
console.log(e);



// 任意类型（any）

let number: any = 123;
number = 'str';
number = true;

// 任意类型的用处
const oBox: any = document.getElementById('box');
oBox.style.color = 'red';


// null 和 undefined  其他（never类型）数据类型的子类型
let num: number;
// console.log(num); // 输出：undefined   报错

let num0: undefined;
console.log(num0); // 输出：undefined  //正确


let num1: number | undefined;
num = 123;
console.log(num);

// 定义没有赋值就是undefined
let num2: number | undefined;
console.log(num);


let num3: null;
num3 = null;

// 一个元素可能是 number类型 可能是null 可能是undefined
let num4: number | null | undefined;
num4 = 1234;
console.log(num4);

// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。


// 正确写法
function run(): void {
    console.log('run');
}
run();



// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
// 这意味着声明never的变量只能被never类型所赋值。

let a: never;

// a = 123; //错误的写法

// 如果声明 never 后，会导致下面代码出现意想不到的问题。
// 原因：never 表示无法到达的终点，会导致下面代码无法编译。因为这里会抛出错误
// let a = (() => {
// throw new Error('错误');
// })();

// 类型断言
const someValue: any = 'this is a string';
const strLength: number = (<string>someValue).length;
const strLen: number = (someValue as string).length;

// 类型保护
function getSomeType(value: number): string | number {
    if (value < 0.5) {
        return '123';
    }

    return 123;
}
const type = getSomeType(Math.random());

// S1. 使用类型断言来实现类型保护，但是太复杂
if ((type as string).length) {
    console.log((type as string).length);
}
else {
    console.log((type as number).toFixed());
}

// S2. 定义类型保护函数
function isType(value: string | number): value is string {
    return typeof value === 'string';
}

if (isType(type)) {
    console.log(type.length);
}
else {
    console.log(type.toFixed());
}

// s3. 直接用 typeof 但只适用于 string、number、boolean、symbol
if (typeof type === 'string') {
    console.log(type.length);
}
else {
    console.log(type.toFixed());
}

// s4. 针对类和接口使用 instanceof 和 in

