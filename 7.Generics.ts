function identity1(arg: number): number {
    return arg;
}
function identity2(arg: any): any {
    return arg;
}
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");
let output2 = identity("myString");


function loggingIdentity<T>(arg: T): T {
//function loggingIdentity<T>(arg: T[]): T[] {//will work
//function loggingIdentity<T>(arg: Array<T>): Array<T> {
    //console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
let myIdentity2: <U>(arg: U) => U = identity;
let myIdentity3: {<T>(arg: T): T} = identity;

interface GenericIdentityFn {
    <T>(arg: T): T;
}
let myIdentity4: GenericIdentityFn = identity;

interface GenericIdentityFn2<T> {
    (arg: T): T;
}
let myIdentity5: GenericIdentityFn2<number> = identity;


class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));


interface Lengthwise {
    length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
function loggingIdentity3<T extends string>(arg: T): T {
    console.log(arg.length);
    return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.