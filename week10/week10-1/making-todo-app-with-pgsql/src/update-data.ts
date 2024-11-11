import { getClient } from "./utils";

async function updateTodo(todoId: number){
    const client = await getClient();
    
    const updateText = 'UPDATE todos SET done = $1 WHERE id = $2';
    client.query(updateText, [true, todoId]);
    console.log(`Yout todo with ID ${todoId} is set to DONE`);
}

const updateTodoId = 1
updateTodo(updateTodoId);
