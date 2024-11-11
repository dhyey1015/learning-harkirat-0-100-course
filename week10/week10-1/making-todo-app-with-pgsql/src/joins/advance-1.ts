import { getClient } from "../utils";

async function getUserAndTodosUsingJoin(userId: number){
    const client = await getClient();

    const joinQuery = `
        SELECT users.*, todos.title, todos.description, todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1
    `;
    const response = await client.query(joinQuery, [userId]);
    const result = response.rows;

    console.log('Users and Todos are:', result);
}

getUserAndTodosUsingJoin(1);