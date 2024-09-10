const fs = require("fs");

function ReadFile(){
    console.log("inside ReadFile fn");
    return new Promise (function(resolve){
        console.log ("inside Promise ");
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("reading file");
            resolve(data)
        });
    });
}

function OnData(data){
    console.log(data);
}

ReadFile().then(OnData)

//check what gets executed first
console.log("not inside any function3")
let a1 = 0;
for (let i = 0; i < 2000000000; i++)
{
    a1++;
}


