function add(x: number, y: number): number {
    return x + y;
}
let myAdd = function(x: number, y: number): number { return x + y; };

let myAdd2: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

// The parameters 'x' and 'y' have the type number
let myAdd3: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };


function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
//let result1 = buildName("Bob");
//let result2 = buildName("Bob", "Adams", "Sr.");
let result3 = buildName("Bob", "Adams");

//function buildName(firstName?: string, lastName: string) {//wrong
function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result11 = buildName2("Bob");
//let result22 = buildName2("Bob", "Adams", "Sr.");
let result33 = buildName2("Bob", "Adams");

//function buildName(firstName = "Will", lastName: string) {//ok
function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result111 = buildName3("Bob");
let result222 = buildName3("Bob", undefined);
//let result333 = buildName3("Bob", "Adams", "Sr.");
let result444 = buildName3("Bob", "Adams");

function buildName5(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName5("Joseph", "Samuel", "Lucas", "MacKinzie");
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName5;


let nm = {
    name: 'Kent',
    pickName: function() {
        return function() {
            //return this.name;
            return this;
        }
    }
}
let nm2 = {
    name: 'Kent',
    pickName: function() {
        return () => {
            return this.name;
        }
    }
}
interface Names {
    name: string;
    pickName(this: Names): () => string;
}
let nm3: Names = {
    name: 'Kent',
    pickName: function(this: Names) {
        return () => {
            return this.name;
        }
    }
}
let picked = nm3.pickName();
console.log(picked());