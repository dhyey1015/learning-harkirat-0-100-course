import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dhyeykakadiya1015:password123456789@cluster0.zwht8.mongodb.net/full_stack_todo_app1");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isComplete: Boolean,
});

const todos = mongoose.model("todos", todoSchema) 

export default todos;
