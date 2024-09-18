const fs = require("fs");

let data = fs.readFileSync("a.txt", "utf-8")
console.log(data)