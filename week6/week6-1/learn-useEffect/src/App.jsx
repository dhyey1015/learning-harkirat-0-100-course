import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTimeout(function() {
      fetch("https://jsonplaceholder.typicode.com/todos") //https://jsonplaceholder.typicode.com/todos 
      .then(async (res) => {
        const data = await res.json()
        setTodos(data)
      })
    }, 10000);
    
  },[])

  return (
    <div>
    {todos.map(todo => {
      return (
      <Todos key={todo.id} title={todo.title} id={todo.id}></Todos>
      )
    })}
   </div>
  )
}

function Todos({title, id}){
  return(
    <div>
      <p>-------------------------------------------------------------------------------------------</p>
      <h1>Task: {id}</h1>
      <h2>Title: {title}</h2>
      <p>-------------------------------------------------------------------------------------------</p>
    </div>
  )
}

export default App
