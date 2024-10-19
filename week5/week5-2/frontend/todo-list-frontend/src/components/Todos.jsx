
export function Todos({todos, setTodo}){

    async function markAsComplete(todoId){
        const response = await fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                id: todoId 
            }),
        });

        if(response.ok) {
            setTodo(function(Todos){
                return Todos.map(function(todo){
                    return todo._id === todoId ? { ...todo, isComplete: true } : todo;
                });
            });
        }
    }
   
    return(
        <div>
            {todos.map(function(todo){
                return(
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={function(){
                            markAsComplete(todo._id)
                        }}
                        disabled={todo.isComplete}>
                            {todo.isComplete === true ? "completed" : "Mark as Complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}