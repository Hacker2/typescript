function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface LabeledValue {
    label: string;
    //size?: number;
}
function printLabel2(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}
printLabel2(myObj);

//readonly
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
//ro[0] = 12; // error!
a = ro as number[];
//ariables use const whereas properties use readonly


interface SquareConfig {
    color?: string;
    width?: number;
    //[propName: string]: any;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    return {color: 'red', area: 5};
}
//let mySquare = createSquare({ colour: "red", width: 100 });
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
let squareOptions = { colour: "red", width: 100 };
//let squareOptions = { colour: "red" };//will fail
let mySquare2 = createSquare(squareOptions);


interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return true;
}
mySearch = function(src: string, sub: string): boolean {
    return false;
}
mySearch = function(src, sub) {
    return true;
}


interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

//extends interfaces
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
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


class Control {
    state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Image2 implements SelectableControl {
    state: any;
    select() { }
}