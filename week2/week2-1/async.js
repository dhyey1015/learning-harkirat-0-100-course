const fs = require('fs');

function putCopyRightToFile(cb){
    fs.readFile("a.txt","utf-8", function(err, data){
        data = data + " copyright 2020 dhyey kakadiya";
        fs.writeFile("a.txt", data, function(){
            cb();
        })
    });
}

putCopyRightToFile(function(){
    console.log("copyright has been put")
})