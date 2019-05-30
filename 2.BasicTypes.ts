let b: boolean = true;
let n: number = 5;
let s: string = 'hello'
//n = 'test';

console.log(`test ${5 + 5}`);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10];
//x = [10, "hello"];

enum Color {Red, Green, Blue}
//enum Color {Red=4, Green=2, Blue=1}
let c: Color = Color.Green;
let colorName: string = Color[2];

let notSure: any = 4;
notSure.toFixed();
notSure = "maybe a string instead";
//notSure.toFixed();//runtime error

let list3: any[] = [1, true, "free"];
list3[1] = 100;

function warnUser(): void {
    console.log("This is my warning message");
    //return true;
}
let unusable: void = undefined;
//unusable = 5;
let u: undefined = undefined;
let nn: null = null;
//nn = 5;

function error(message: string): never {
    throw new Error(message);
}

let ob: object = {};

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

