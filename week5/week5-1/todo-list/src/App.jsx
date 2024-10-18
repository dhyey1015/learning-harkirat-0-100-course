import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
      {
        title: "got to gym",
        description: "go to gym form 8-9",
        complete: true
      },
      {
        title: "do DSA",
        description: "do DSA form 9-11",
        complete: false
      }
  ])

  function addTodo(){
    // if todos = [1, 2]
    // so if [...todos] = [1, 2] but in a new array (idk how a new array)
    // and if [...todos, 3] = [1, 2, 3] but in a new array
    setTodos([...todos,{
      title: "new todo",
      description: "description of new todo"
    }])
  }



  return (
    <div>
      <button onClick={addTodo}>Add a random Todo</button>
      {/* dumb way to do it use for loops instead */}
      {/* {JSON.stringify(todos)} */}
      {/* <Todos title={todos[0].title} description={todos[0].description} complete={todos[0].complete}></Todos> */}
      {/* <Todos title={todos[1].title} description ={todos[1].description} complete={todos[1].complete}></Todos> */}
      {todos.map(function(todo){
        return <Todos title= {todo.title} description = {todo.description} complete = {todo.complete}></Todos>
      })}
      
      <DummyButton></DummyButton>
    </div>
  )
}

function  DummyButton(){
  console.log("re-rendering dummy button")
  return (
    <button>dummy button</button>
  )
}
function Todos(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.complete ? "Complete" : "Incomplete"}</h2>
    </div>
  )
}

export default App
