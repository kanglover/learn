interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

// 直接传入对象会检查必须符合接口要求
printLabel({ label: ''});
// printLabel({ label: '', ss: '' }); // Error ss 不在接口定义中

// 使用对象地址只检查对象中是否包含定义的属性，不额外检查多余的属性
var al = { label: '', ss: '' };
printLabel(al);

// 可选属性
interface SqureConfig {
    color?: string;
    width?: number;
}

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

// ts 具有 ReadonlyArray<T> 表示只读的数组
let array: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = array;

// 任意数量的其他属性(必选属性和可选属性必须是任意属性的子集)
// color必选属性 string 和 可选属性width number类型都是 any 的子集
interface SquareConfig {
    color: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig) {
    // ...
}

createSquare({ color: 'red', props: false });

// 函数类型
interface SearchFun {
    (source: string, substring: string): boolean;
}
let mySerach: SearchFun;
// 函数中的属性不一定要和接口定义的名字相同 source 可以为 src
mySerach = function (source: string, substring: string) {
    return source.search(substring) > -1;
}

// 可索引的类型
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray = ['bob', 'fir'];

// 共有支持两种索引签名：字符串和数字.
// 数字索引的返回值必须是字符串索引返回值类型的子类型。
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

/*错误 interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
} */

interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let mArray: ReadonlyStringArray = ["Alice", "Bob"];
// mArray[2] = "Mallory"; // error!

// 类接口
interface ClockInterface {
    current: Date;
}
class Clock implements ClockInterface {
    current: Date;
    constructor(h: number, m: number) {
        this.current = new Date(h)
    }
}

// 继承接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// 混合类型 一个对象同时作为函数和对象
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;

// 接口继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

// 子类会继承父类的属性 state，因此没问题，和下面的 Image 不一样
class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {

}

// Error: Property 'state' is missing in type 'Image'.
// 必须要定义接口上的属性
// class Image implements SelectableControl {
//     select() { }
// }
