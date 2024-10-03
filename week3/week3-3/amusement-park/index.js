const express = require('express');

const port = 3000;

const app = express();

//a function will return a boolean if the age of that person is greater than 14 
function isOldEnough(age){
    if(age >= 14){
        return true;
    }
    else{
        return false;
    }
}

// function that checks the age in middleware
function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age
    if(age >= 14){
        next();
    }
    else{
        res.status(411).json({
            msg: "Sorry you are not of age yet"
        })  
    }
}

app.get('/ride1', function(req, res){
    const age = req.query.age;
    if(isOldEnough(age)){
        res.json({
            msg: "You have successfully riden the 1"
        })
    }
    else{
        res.status(411).json({
            msg: "Sorry you are not of age yet"
        })
    }
})

app.get('/ride2', isOldEnoughMiddleware, function(req, res){
    
    res.json({
            msg: "You have successfully riden the 2"
        })
})

app.listen(3000);