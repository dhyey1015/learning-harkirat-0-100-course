const express = require('express')
const port = 3000

const bodyParser = require("body-parser")

function calculateSum(n){
    let ans = 0
    for(let i = 0; i <= n; i++){
        ans = ans + i;
    }
    return ans
}

const app = express()

app.use(bodyParser.json())

app.post('/calculate-count-wise-using-json', function(req, res){
    const n = req.body.number;
    console.log(n)
    let ans = calculateSum(n)
    res.send({
        "ans" : ans.toString()
    });
})
app.get('/calculate-count-wise-use-query', function(req, res){
    const n = req.query.number;
    let ans = calculateSum(n)
    res.send(ans.toString());
})
app.listen(port, function(){
    console.log(`Listening to the port ${port}`)
})