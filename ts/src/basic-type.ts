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
var flag: boolean = true;

// flag = 123;  //错误

flag = false;  //正确
console.log(flag);

// 数字类型（number）

var num: number = 123;
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
console.log(num);


// 字符串类型(string）

var str: string = 'this is ts';
str = 'haha';  //正确

let namestr: string = 'bob';
let age: number = 23;
let sentence: string = `hello, my name is ${name}.
I will be ${age + 1} years old next month`;
//str = true;  //错误



// 数组类型（array）  ts中定义数组有两种方式

// 1.第一种定义数组的方式



var arr: number[] = [11, 22, 33];
let list: number[] = [1, 2, 3];
let lists: Array<number> = [1, 2, 3];

console.log(arr);

//2.第二种定义数组的方式

var arr2: Array<number> = [11, 22, 33];
console.log(arr2)

//3、第三种
var arr3: any[] = ['131214', 22, true];
console.log(arr3);


// 元组类型（tuple）  属于数组的一种

let arr4: [number, string] = [123, 'this is ts'];
console.log(arr);

let x: [string, number];
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



enum Flag1 { success = 1, error = 2 };
let s: Flag1 = Flag1.success;
console.log(s);

enum Flag2 { success = 1, error = 2 };
let f: Flag2 = Flag2.error;
console.log(f);


enum Color1 { blue, red, 'orange' };
var c: Color1 = Color1.red;
console.log(c);   //1  如果标识符没有赋值 它的值就是下标

enum Color2 { blue, red = 3, 'orange' };
var c2: Color2 = Color2.red;
console.log(c2);   //3

var c3: Color2 = Color2.orange;
console.log(c3);   //4


enum Err { 'undefined' = -1, 'null' = -2, 'success' = 1 };
var e: Err = Err.success;
console.log(e);



// 任意类型（any）

var number: any = 123;
number = 'str';
number = true;
console.log(num);

//任意类型的用处
var oBox: any = document.getElementById('box');
oBox.style.color = 'red';


// null 和 undefined  其他（never类型）数据类型的子类型
var num: number;
console.log(num);  //输出：undefined   报错

var num0: undefined;
console.log(num)  //输出：undefined  //正确


var num1: number | undefined;
num = 123;
console.log(num);

//定义没有赋值就是undefined
var num2: number | undefined;
console.log(num);


var num3: null;
num3 = null;

//一个元素可能是 number类型 可能是null 可能是undefined
var num4: number | null | undefined;
num4 = 1234;
console.log(num4)

// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。


//正确写法
function run(): void {
    console.log('run')
}
run();



// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
//这意味着声明never的变量只能被never类型所赋值。

var a: never;

// a = 123; //错误的写法
a = (() => {
    throw new Error('错误');
})();

// 类型断言
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
let strLen: number = (someValue as string).length;