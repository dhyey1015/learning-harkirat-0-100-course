// without promises function
function myOwnSetTimeOut(callback, duration){
    setTimeout(function(){
        callback(); // here we are calling callback which is something end user gave us.
    }, duration);
}

myOwnSetTimeOut(function(){
    console.log("i am simple callback function")
})

// promises function to get rid of callback hell 
function promisifiedmyOwnSetTimeOut(duration){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(); // we are calling resolve something promise obj gave us.
        }, duration)
    }); 
}

promisifiedmyOwnSetTimeOut(1000)
    .then(function(){
        console.log("i am promisified callback function");
    });

let n = new Promise(function(resolve){
    resolve();
    console.log(n)
})
console.log(n);