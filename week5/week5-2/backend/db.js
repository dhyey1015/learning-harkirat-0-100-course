const mongoose = require("mongoose")

mongoose.connect("");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isComplete: Boolean,
})

const todo = mongoose.model("todo", todoSchema) 

module.exports({
    todo: todo
})