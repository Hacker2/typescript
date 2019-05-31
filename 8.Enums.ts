enum Direction {
    //Up = 1,
    Down,
    Left,
    Right,
}
//console.log(Direction.Up);
console.log(Direction.Down);

enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
    //NoValue//error
}
console.log(Direction2.Down);

enum BooleanLikeHeterogeneousEnum { //don't do it
    No = 0,
    Yes = "YES",
}

enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a];