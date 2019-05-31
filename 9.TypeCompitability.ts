interface Named {
    name: string;
}
class Person {
    name: string;
}
let p: Named;
p = new Person();

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;
console.log(x.name);

let x2 = (a: number) => 0;
let y2 = (b: number, s: string) => 1;
y2 = x2; // OK
//x2 = y2; // Error

let x3 = () => ({name: "Alice"});
let y3 = () => ({name: "Alice", location: "Seattle"});
x3 = y3; // OK
//y3 = x3; // Error, because x() lacks a location property

enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };
let status2 = Status.Ready;
//status2 = Color.Green;

class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}
class Size {
    feet: number;
    constructor(numFeet: number) { }
}
let a: Animal;
let s: Size;
a = s;  // OK
s = a;  // OK

interface Empty<T> {
}
let x4: Empty<number>;
let y4: Empty<string>;
x4 = y4;
interface NotEmpty<T> {
    data: T;
}
let x5: NotEmpty<number>;
let y5: NotEmpty<string>;
//x5 = y5;

let identity = function<T>(x: T): T {
    return x;
}
let reverse = function<U>(y: U): U {
    return y;
}
identity = reverse;

