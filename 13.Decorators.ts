function sealed(constructor: Function) {
    console.log('sealed');
    console.log(constructor);
}

function color(value: string) { // this is the decorator factory
    return function (target) { // this is the decorator
        // do something with 'target' and 'value'...
    }
}

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
}
function test(target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("test(): called");
}
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
@sealed
class C {
    @f()
    @g()
    @test
    @enumerable(false)
    method() {}
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}



function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log('required');
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    console.log('validate');
}
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required name: string) {
        return "Hello " + name + ", " + this.greeting;
    }
}