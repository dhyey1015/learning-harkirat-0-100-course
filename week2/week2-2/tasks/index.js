const express = require('express')
const bodyParser = require('body-parser')
const path = require('path') // provided by node js

const app = express()
const port = 3000
const dataFile = path.join('todo-list', 'todos.json')

app.use(bodyParser.json())

function getTodos(){
    //TODO
}

function saveTodos(todos){
    fs.writeFile
}

//send the already existing todo to the page
app.get('/get-todo', function(req, res){
    const todos = getTodos()
    res.send(todos);
})

app.post('/add-todos-to-list', function(req, res){
    const todos = getTodos()

})

app.listen(port, function(){
    console.log(`Listening on the port ${port}`)
})