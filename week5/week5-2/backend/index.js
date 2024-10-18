const express = require("express");
const mongoose = require("mongoose")

const app = express();
app.use(express.json())

mongoose.connect("your_mongodb_cluster")

const { Todolist } = require("../")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isComplete: Boolean,
})

app.post('/add-todo', function(req, res){
    const title = req.body.title
    const description = req.body.description
    const isComplete = req.body.isComplete

    Todolist.create({
        title: title,
        description: description,
        isComplete: isComplete
    })
    res.json({
        message: "The new todo is added to your todo list"
    })
})

app.get('/get-todos', function(req, res){
    const response = Todolist.find({})
    res.json({
        Your_todos: response
    })
})