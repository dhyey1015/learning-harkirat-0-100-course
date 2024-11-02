const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

const data = [
    {
        "network": 7, 
        "jobs":8,
        "messaging": 10,
        "notifications": 5
    },
    {
        "network": 14, 
        "jobs":20,
        "messaging": 52,
        "notifications": 66
    },
    {
        "network": 2, 
        "jobs":10,
        "messaging": 16,
        "notifications": 23
    },
    {
        "network": 45, 
        "jobs": 82,
        "messaging": 30,
        "notifications": 60
    }
];

app.get('/data',function(req, res){
    const randomIndex = Math.floor(Math.random() * data.length);
    res.json(data[randomIndex]);
});


app.listen(3000);