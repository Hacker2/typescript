class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class Animal2 {
  public name: string;
  private familyName: string;
  constructor(theName: string, fName: string) {
      this.name = theName;
      this.familyName = fName;
  }
}
new Animal2("Cat", "Test").name;
//new Animal("Cat", "Test").familyName;


class Animal3 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
class Rhino extends Animal3 {
    constructor() { super("Rhino"); }
}
class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
let animal3 = new Animal3("Goat");
let rhino = new Rhino();
let employe = new Employee("Bob");
animal3 = rhino;
//animal3 = employe;


class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}
class Employee2 extends Person {
    constructor(name: string) {
        super(name);
    }
    public getName() {
        return this.name;
    }
}
let howar = new Employee2("Howar");
console.log(howar.getName());
//console.log(howar.name); // error


class Person3 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}
class Employee3 extends Person3 {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee3("Howard", "Sales");
//let john = new Person3("John");


class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit";


class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {}
}
let dad2 = new Octopus2("Man with the 8 strong legs")


class Employee4 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }
}
let employee4 = new Employee4();
employee4.fullName = "Bob Smith";
console.log(employee4.fullName);


class Grid {
    static origin = {x: 0, y: 0};
}
Grid.origin.x = 5;
console.log(Grid.origin.x);

abstract class Animal4 {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}



abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports();



class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};