const express = require("express")
const bodyParser = require("body-parser")
const app = express();

const port = 3000

app.use(bodyParser.json());

app.get('/route-handler', function(req, res){
    res.send("<h1> hello</h1>");
    // res.json({
    //     name: "dhyey",
    //     age: 19
    // })
    
})

app.post('/making-post-req', function(req, res){
    console.log(req.headers["authorization"])
    res.send({
        name: "dhyey",
        age: 12
    })
})

app.post('/get-body-form-user', function(req, res){
    console.log(req.body["name"])
    console.log(req.body["age"])
    console.log(req.body);
    res.send("accessing the body of user request")
})

app.listen(port, function(){
    console.log(`Listening to the port ${port}`)
})