// type KeyInput = "up" | "down" | "left" | "right" // can use this too

//if not given a values 
enum Direction {
    Up, 
    Down,
    Right,
    Left
}

//if given a value
enum Direction1 {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

//if you want to give int values
enum Direction2{
    Up = 1,
    Down, //2
    Left,//3
    Right //4
}


function doSomething(keyPressed: Direction){
   //do something
}

doSomething(Direction.Up)
doSomething(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)
