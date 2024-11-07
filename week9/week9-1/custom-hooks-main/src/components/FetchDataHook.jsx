import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function FetchDataHook() {
  
    const {todos, loading} = useTodos(10)
  
    if(loading){
      return(
        <div>loading....</div>
      )
    }
    return (
      <div>
          {todos.map(todo => <Track key={todo.id}todo = {todo}/>)}
      </div>
    )
  }

export function useTodos(n){

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(function(){
      setLoading(true)
      const value = setInterval(function(){
        axios.get('https://jsonplaceholder.typicode.com/todos/')
          .then(function(response){
            setTodos(response.data)
            setLoading(false)
          })
      }, n * 1000)
      
      return function(){
        clearInterval(value)
      }
    }, [n])

    return {todos, loading}
  }
  
  function Track({ todo }){
    return (
      <div>
        task: {todo.id}
        <br />
        title: {todo.title}
        <br />
      </div>
    )
  }