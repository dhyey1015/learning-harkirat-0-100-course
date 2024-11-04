const axios = require("axios")

// using .then
function main1(){
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(async function(response1){
            const json1 = await response1.json()
            console.log(json1.length)
        })
}
//using async await
async function main2() {
    const response2 = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json2 = await response2.json()
    console.log(json2.length)
}

//using axios library
async function main3(){
    const response3 = await axios.get("https://jsonplaceholder.typicode.com/todos")
    console.log(response3.data)
}

function postMain1(){
    fetch("https://jsonplaceholder.typicode.com/todos",{
        method: "POST",
    })
        .then(async function(response1){
            const json1 = await response1.json()
            console.log(json1)
        })
}

async function postMain3(){
    const response3 = await axios.post("https://jsonplaceholder.typicode.com/todos")
    console.log(response3.data)
}

async function postDataHeaders(){
    const response4 = await axios.post("https://httpdump.app/inspect/f35d2fcf-4b51-48a9-ae82-bdaa3d0fb2a7",
            {
                username: "dhyey",
                password: "dhyey"
            },
            {
                headers: {
                    Authorization: "Bearer 1234jvkfdlmsdxj43902dkxjwifv03fkd2oxwjecnfj0932"
                },
            },
        )
        console.log(response4.data)
}

postDataHeaders()

// main1()

// main2()

// main3()

// postMain1()
// postMain3()


