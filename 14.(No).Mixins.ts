class First {
    a: number;
    one() {
        console.log('one');
    }

}

class Second {
    b: number;
    two() {
        console.log('two');
    }

}

class FirstSecond implements First, Second {
    a: number;
    b: number;
    constructor() {
        this.a = 5;
        this.b = 6;
    }
    one() {
        this.one();
    }
    two() {
        this.two();
    }
    three() {
        console.log('three');
    }
}

let obj = new FirstSecond();
obj.one();
obj.two();
obj.three();
console.log(obj.a);