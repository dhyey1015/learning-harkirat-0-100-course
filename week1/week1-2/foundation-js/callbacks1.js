function sum(a, b, fnToCall){
    let result = a + b;
    // return result;
    fnToCall(result)
}

function displayResult(data){
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is: "+ data);
}
//TODO
//task is to call a single function to display result
// displayResultPassive(sum(1,3)) <---------- this is correct too
sum(1, 3, displayResult) //but use this as we want to learn about fnToCall method to to learn how to pass function as an args
