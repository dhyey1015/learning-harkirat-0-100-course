const express = require('express');
const zod = require('zod')
const app = express();
const port = 3000;
app.use(express.json())

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have "+ kidneyLength +" kidneys")
})

app.use((err, req, res, next) => {
    res.json({
        msg: "Sorry something is worng with our server"
    })
})

app.listen(port, function(){
    console.log(`Listening to the port ${port}`)
})