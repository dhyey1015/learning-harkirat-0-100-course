import { getClient } from "./utils";

async function deleteTodos(todoId: number){
    const client = await getClient();

    const deleteText = 'DELETE FROM todos WHERE id = $1';
    await client.query(deleteText, [todoId])

    console.log(`Your todo of ID ${todoId} has been deleted`)
}

const deleteTodosId = 1
deleteTodos(deleteTodosId)