const express = require("express3"); 

const app = express();

function main(){
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(async function(response){
            const json = await response.json()
            console.log(json)
        })
}

main()