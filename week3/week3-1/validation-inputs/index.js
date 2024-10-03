const express = require('express');
const zod = require('zod');
const app = express();
const port = 3000;

// const schema = zod.array(zod.number())

function validateInput(obj){
    const schema1 = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8),
        country : zod.literal("IN").or(zod.literal("US"))  
    })

    return schema1.safeParse(obj)
}
app.use(express.json())

app.post("/health-checkup", function(req, res, next){
    // const kidneys = req.body.kidneys
    const inputBody = req.body
    const response = validateInput(inputBody);
    // const response = schema.safeParse(kidneys)
    // const kidneyLength = kidneys.length;
    if(!response.success){
        res.status(411).json({
            msg: "Input is Invalid"
        })
    }
    else{
        res.send({
            response
        })
    }
})

app.use((err, req, res, next) => {
    res.json({
        msg: "Something is wrong with our server"
    })
})

app.listen(port, function(){
    console.log(`Listening to the port ${port}`)
})

