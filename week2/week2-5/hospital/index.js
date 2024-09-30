const express = require('express')
const app = express()
app.use(express.json())

var users = [{
    name: 'harry',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }, {
        healthy: true
    }] 
}]

app.get('/get-post-put-delete', function(req, res){
    const harryKidneys = users[0].kidneys;
    const numberOfKidneys = harryKidneys.length
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < harryKidneys.length; i++){
        if(harryKidneys[i].healthy){
            numberOfHealthyKidneys++
        }
    }

    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
    // const user = req.body.user
    // let userKidneys = null;
    // let userKidneysCount = 0;
    // let userHealthyKidneysCount = 0;
    // let userUnHealthyKidneyCount = 0;

    // //user kidneys
    // for (let i = 0; i < users.length; i++){
    //     if(users[i].name == user){
    //         userKidneys = users[i].kidneys
    //     }
    // }

    // //kidney count
    // userKidneysCount = userKidneys.length

    // // healthy kidney count
    // for (let i = 0; i < userKidneysCount; i++){
    //     if(userKidneys[i].healthy){
    //         userHealthyKidneysCount++;
    //     }
    // }

    // //unhealthy kidney count
    // userUnHealthyKidneyCount = userKidneysCount - userHealthyKidneysCount;

    // //send response
    // res.json({
    //     user,
    //     userHealthyKidneysCount,
    //     userUnHealthyKidneyCount
    // })
})

app.post('/get-post-put-delete', function(req, res){

    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "added"
    })
    // const user = req.body.user
    // const isHealthy = req.body.isHealthy

    // //adding healthy or unhealthy kidney
    // for(let i = 0; i < users.length; i++){
    //     let healthyFlag = false
    //     if(users[i].name == user){
    //         users[i].kidneys.push({
    //             healthy: isHealthy
    //         })
    //         healthyFlag = true
    //     }
    //     if(healthyFlag){
    //         res.json({
    //             msg: "Your kidney is Added"
    //          })
    //     }
    // }
})

app.put('/get-post-put-delete', function(req, res){
    if(!isAllKidneysAreHealthy()){
        for (let  i = 0; i < users[0].kidneys.length; i++){
                users[0].kidneys[i].healthy = true
            }
        res.json({
            msg: "Updated"
        })
    }
    else {
        res.sendStatus(411)
    }
    // let isHealthy = req.body.isHealthy
    // let flag = false
    // for (let  i = 0; i < users[0].kidneys.length; i++){
    //     users[0].kidneys[i].healthy = isHealthy
    //     flag = true
    // }
    // if(flag){
    //     res.json({msg : "status updated"})
    // }
    


})

app.delete('/get-post-put-delete', function(req, res){
    if(isThereAtleastOneUhealthyKidney()){
        const newKidneys = []
        for (let  i = 0; i < users[0].kidneys.length; i++){
            if (users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys; 
        res.json({
            msg: "done"
        })
    } 
    else {
        res.sendStatus(411)
    }

      
})
// what should happen if they try to delete kidney when all are healthy kidneys?
function isThereAtleastOneUhealthyKidney(){
    let atleastOneUhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUhealthyKidney = true
            break;
        }
    }
    return atleastOneUhealthyKidney
}
// what should happen if they try to make a kidney healthy when all are already healthy
function isAllKidneysAreHealthy(){
    let allKidneysAreHealthy = true;
    for (let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            allKidneysAreHealthy = false
            break
        }
    }
    return allKidneysAreHealthy
}

app.listen(3000)

