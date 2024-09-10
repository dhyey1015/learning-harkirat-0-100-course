function square(n){
    return n * n; 
}

function cube(n){
    return n * n * n;
}

function sumOf(a, b, fnToCall){
    const val1 = fnToCall(a);
    const val2 = fnToCall(b);

    return val1 + val2
}

const ans1 = sumOf(2, 2, square); //calling function inside a function
const ans2 = sumOf(2, 2, cube); //calling function inside a function

console.log(ans1);
console.log(ans2);