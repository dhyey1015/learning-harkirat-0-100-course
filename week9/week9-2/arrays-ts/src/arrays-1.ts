type NumberArr = number[]

function maxValue(arr: NumberArr){
    let max = 0
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max
}

console.log(maxValue([1,5,8,10]))