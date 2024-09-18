// Async function call
// some synctask should run
// async should return my work
// with some sync task 

// function someSyncTask1(){
//     console.log ("some sync task 1")
// }

// function someSyncTask2(){
//     console.log("some sync task 2")
// }

// setTimeout(function(){
//     someSyncTask2();
// },1000)

// someSyncTask1();


console.log("At the top 1")
function promisifiedTimeout(){
    console.log("function called 3")
    return new Promise(function(resolve){
        console.log("inside promise callback 4")
        setTimeout(function(){
            console.log("set time out called 5")
            resolve("done!! i am burn out.");
        },3000)
    })
}

console.log("in  the middel 2")

promisifiedTimeout().then(function(value){
    console.log("promisified then 6")
    console.log(value)
})