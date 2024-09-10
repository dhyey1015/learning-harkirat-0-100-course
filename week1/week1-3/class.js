class Animal{
    constructor(name, legCount, speak){
        this.name = name;
        this.legCount = legCount;
        this.speak = speak;
    }

    static greet(){
        console.log("hello world!")
    }

    speak(){
        console.log("hi there" + this.speak)
    }
}

let  dog = new Animal("dog", 4, "bhow bhow"); 
let  cat = new Animal("cat", 4, "meow meow"); 

Animal.greet()
console.log("anime " + dog["name"] + " have " + dog["legCount"] + " legs " + " and they speak " + dog["speak"]);

//concept of class 
// const Dog = {
//     name1 : "doggie",
//     legCount : "2",
//     speaks : "bhow bhow"
// }
// const Cat = {
//     name1 : "doggie",
//     legCount : "2",
//     speaks : "mewow mewow"
// }

// function printAnimal(animal)
// {
//     console.log("animal " + animal["name1"] +" "+ animal["speaks"]);
// }


// printAnimal(Dog);
// printAnimal(Cat);