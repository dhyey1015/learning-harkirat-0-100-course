import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
    const [todos, setTodos] = useState([])

    // fetch("http://localhost:3000/get-todos")
    //   .then(async function(response){
    //     const json = await response.json()
    //     setTodos(json.todos)
    //   })
      
  return (
    <div>
      {/* to create todo */}
      <CreateTodo />

      {/* to render todo */}
      <Todos todos= {todos} />
    </div>
  )
}

export default App
