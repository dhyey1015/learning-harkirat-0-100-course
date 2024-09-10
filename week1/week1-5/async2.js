const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){  //this will run after becaues its async
    console.log(data);
})

console.log("hello world1!");
let a = 0;
for (let i = 0; i < 1000000000; i++)
{
    a++;
}
console.log("hello world2!"); // will run first 