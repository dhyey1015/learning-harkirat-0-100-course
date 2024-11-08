import './App.css'

function App() {

  const todos: TodoInterface = {
      title: "do something",
      description: "do something with your life",
      done: false
    }


  return (
    <div>
        <Todos title={todos.title} description={todos.description} done={todos.done}/>
    </div>
  )
}

interface TodoInterface{
  title: string;
  description: string;
  done: boolean;
}

function Todos(props: TodoInterface){

  return(
    <div>
      <p> {props.title} </p>
      <br />
      <p> {props.description} </p>
      <br />
      <p> IsDone: {props.done? "done" : "not Done"} </p>
    </div>
  )
}

export default App
