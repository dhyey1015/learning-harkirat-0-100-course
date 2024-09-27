 const express = require("express")
 const port = 3000
 const app = express();

 app.get('/',function(req, res){
    //TODO list
    res.send('Hello World!!') // like django response
 })



 app.listen(port)