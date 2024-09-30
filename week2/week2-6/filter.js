// what if we have input array, give me back all even values from it


const arr = [1, 2, 3, 4, 5, 6]
// dumb way to do it
// let newArr = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         newArr.push(arr[i])
//     }
// }
// console.log (newArr)

//smart way to do it

function filteringArray(n){
    if (n % 2 == 0){
        return true
    }
    else{
        return false
    }
}

const ans = arr.filter(filteringArray)

