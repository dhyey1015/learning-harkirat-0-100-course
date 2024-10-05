const express = require('express');
const app = express();
const port = 3000;
 
app.get('/health-checkup', function(req, res){
    
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    //----------------dumb way to do pre-checks---------------------
    //user exist check
    if(username != 'xyz1015' && password != 'pass'){
       res.status(403).json({
            msg: "User does not exist"
       }) 
       return;
    }

    //kidney input check (1 or 2)
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "worng input"
        })
        return;
    }

    //do something with kidney here if every check went well
    res.json({
        msg: "Your heart is healthy"
    });
});

app.use((err, req, res, next) =>{
    res.json({
        msg: "something is wrong with our backend"
    })
})
app.listen(port, function(){
    console.log(`Listening to port ${port}`)
})