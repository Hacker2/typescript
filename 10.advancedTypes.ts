//function add(x: any) {
function add(x: number | string) {
         console.log(x);
}
add(5);
//add(true);

interface Bird {
    fly();
    layEggs();
}
interface Fish {
    swim();
    layEggs();
}
class FishImpl implements Fish {
   swim() {}
   layEggs() {}
}
function getSmallPet(): Fish | Bird {
    return new FishImpl();
}
let pet = getSmallPet();
pet.layEggs(); // okay
//pet.swim();    // errors
//if (pet.swim) {
//    pet.swim();
//}
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}

function isNumber(x: any): x is number {
    return typeof x === "number";
}
function isString(x: any): x is string {
    return typeof x === "string";
}

interface Padder {
    getPaddingString(): string
}
class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder{
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}
let p = new SpaceRepeatingPadder(4);
let p2 = new StringPadder(" ");
console.log(p instanceof SpaceRepeatingPadder);
console.log(p2 instanceof StringPadder);
//console.log(p2 instanceof Padder);


type stringOrNumber = string | number;
let nb: stringOrNumber = 5;
console.log(nb);

type Container<T> = { value: T };
let cr: Container<string> = {value: 'hello'};
console.log(cr.value);

type Easing = "ease-in" | "ease-out" | "ease-in-out" | 1;
let ea: Easing = 'ease-in';
//let ea2: Easing = 'ease-in2';