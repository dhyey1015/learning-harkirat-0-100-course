function promisifiedTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve, duration)
    })
    return p;
}


//still call back hell even in promises 
promisifiedTimeout(1000).then(function(){
    console.log("first second");
    promisifiedTimeout(2000).then(function(){
        console.log("second second");
        promisifiedTimeout(3000).then(function(){
            console.log("third second");
        });
    });
});

// promise chaining 

promisifiedTimeout(1000).then(function(){
    console.log("first second")
    return promisifiedTimeout(2000)
}).then(function(){
    console.log("second second")
    return promisifiedTimeout(3000)
}).then(function(){
    console.log("third second")
})