// module imports
const express = require("express");
// const mongoose = require("mongoose");


//imports
import { createTodo, updateTodo } from "./types";
const todo = require("./db")


const app = express();
app.use(express.json());


// // const { Todolist } = require("")





app.post('/add-todo', async function(req, res){

    const createPayLoad = req.body;
    const validatePayLoad = createTodo.safeParse(createPayLoad);
    
    //if wrong data comes
    if(!validatePayLoad.success){
        res.status(411).json({
            message: "invalid input"
        })
        return;
    }

    //put it in mongodb 
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        isComplete: false
    })
    
    //respose that todo got created success fully 
    res.json({
        message: "The new todo is created"
    })
})

app.get('/get-todos', async function(req, res){
    const response = await todo.find({})
    res.json({
        Your_todos: response
    })
})

app.put("/completed", async function(req, res){
    const updatePayLoad = req.body
    const validatePayLoad = updateTodo.safeParse(updatePayLoad)

    if(!validatePayLoad.success){
        res.status(411).json({
            message: "Invalid input"
        })
        return;
    }

    await todo.updateOne(
        {
            _id : req.body.id
        },
        {
            isComplete : true
        }
    )

    res.json({
        message: "Todo marked is completed"
    })
})