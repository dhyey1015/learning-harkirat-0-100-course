
export function Todos({todos}){

    console.log(setTodos)
    async function markAsComplete(todoId){
    //    const response = await fetch("http://localhost:3000/completed", {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             id: todoId,
    //         })
    //     })

    //     if(response){
    //         setTodos(function(resTodos){
    //             const res = resTodos.map(function(todo){
    //                 todo._id == todoId ? {...todo, isComplete: true} : todo
    //             })

    //             return res
    //         })
    //     }
        
    }

    return(
        <div>
            {todos.map(function(todo){
                return(
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={markAsComplete}>{todo.isComplete === true ? "completed" : "Mark as Complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}