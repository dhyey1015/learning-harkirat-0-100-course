var data = new Promise(function(reslove){
    setTimeout(function(){
        reslove("foo");
    }, 2000)  
})

function callback(){
    console.log(data)
}

console.log(data)

let a1 = 0;
for (let i = 0; i < 2000000000; i++)
{
    a1++;
}
console.log("<pending> status means promise is made. after promise is made wait for out side the function running part complete. wait till promise is resolved")


data.then(callback)