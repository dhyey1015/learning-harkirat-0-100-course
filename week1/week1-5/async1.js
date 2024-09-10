function findSum(n){
    let ans = 0;
    for (let i = 0; i < n; i++){
        ans += i;
    }
    return ans
}

function findSumTill100(){
    let result = findSum(100);
    console.log(result);
    return result;
}

setTimeout(findSumTill100, 2000);
console.log("hello world!");