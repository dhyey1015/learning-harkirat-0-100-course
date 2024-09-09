function cal_Arithmetic(a, b, Arithmetic)
{
    const ans  = Arithmetic(a, b) // Arithmetic(a, b) is actually calling add function with params (a,b)
    return ans
}

// function Arithmetic(a, b){
//     return a + b;
// }

function add(a, b)
{
    return a + b;
}

const result = cal_Arithmetic(3, 4, add); //ans

console.log(result);

// function calculateArithmetic(a, b, type)
// {
//     if (type == "sum")
//     {
//         const sum =  add(a, b)//a + b;
//         return sum;
//     }

//     if(type == "minus")
//     {
//         const minus = sub(a, b)// a - b;
//         return minus;
//     }
// }

// function add(a, b)
// {
//     return a + b;
// }

// function sub(a, b)
// {
//     return a - b;
// }


// const result =  calculateArithmetic(1, 6, "sum");

// console.log(result);





