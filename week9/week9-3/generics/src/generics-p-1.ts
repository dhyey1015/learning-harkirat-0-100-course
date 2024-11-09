// problem 
// type Input = string | number
// function firstElement(arr: Input[]){
//     return arr[0]
// }
// const value = firstElement(["asd", "dhyey", "0-100"])
// console.log(value.upper) 

// solution

function firstElement<T>(arr: T[]){
    return arr[0]
}
const value1 = firstElement<string>(["swx", "szdx","dxc"])
const value2 = firstElement<number>([200, 34, 45, 45])
console.log(value1.toLowerCase)
console.log(value2) 

