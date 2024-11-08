
function runAfter1S(fn: () => number){
    setTimeout(fn, 1000)
}

function sum1(){
    const x: number = 1 + 2
    console.log(x)
    return x
}

runAfter1S(sum1)

