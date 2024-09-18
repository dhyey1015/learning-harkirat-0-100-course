setTimeout(function(){
    console.log("hi there");
    setTimeout(function(){
        console.log("hi there inside second!!");
        setTimeout(function(){
            console.log("hi there inside 3 second!!");
        }, 3000);
    }, 2000);
},1000);