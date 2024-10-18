/*
    given an array give me back a new array in which 
    every value is multiplied by 2
    input == [1, 2, 3, 4, 5]
    output == [2, 4, 6, 8, 10]
*/

// const arr = [1, 2, 3, 4, 5]
const arr = [
    {
        title: "hello",
        description: "noob"
    },
    {
        title: "hello",
        description: "noob"
    },
    {
        title: "hello",
        description: "noob"
    }
]

// // normal solution
// const newArr = []

// for(let i = 0; i  < arr.length; i++){
//     newArr[i] = arr[i]*2
// }

// for(let i = 0; i  < newArr.length; i++){
//     console.log(newArr[i])
// }

//map function solution

function transform(i){
    return i
}
//map function syntax take one intial input and take one function as input
const ans = arr.map(transform) 
console.log(ans)

//create a function that takes 2 inputs an array
//and a tranformation function callback/fn
//and transforms the array into a new one using the transformation fn 