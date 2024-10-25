import React,{ useState, Fragment }from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let count = 4

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "going gym",
      description: "going to gym form 10-12",
    },
    {
      id: 2,
      title: "do react",
      description: "do react for 8hours",
    },
    {
      id: 3,
      title: "eat healty",
      description: "eat healthy food",
    }
  ])

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  function addTodo(){
    setTodos([...todos,{
        id: count++,
        title: title,
        description: description
      }
    ])
  }

  return (

   <div>
    <input onChange={function(event){
      const value = event.target.value
      setTitle(value)
    }} type="text" name='title' placeholder='title'/>
    <br />

    <input onChange={function(event){
      const value = event.target.value
      setDescription(value)
    }} type="text" name='description' placeholder='description'/>
    <br />

    <button onClick={addTodo}>Add todo</button>
    {todos.map(function(todo){
      return <Todos key = {todo.id} title={todo.title} description={todo.description} id={todo.id}/>
    })}
   </div>
  )
}

function Todos(props){
  return(
    <div>
      <p>------------------------------------------------------------------------------------------</p>
      <h1>task: {props.id}</h1>
      <h2>{props.title}</h2>
      <h2>{props.description}</h2>
      <p>------------------------------------------------------------------------------------------</p>
    </div>
  )
}

export default App
