/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, n);
    });
}

wait(2000).then(function(){
    console.log("i am resolved")
});

module.exports = wait;
