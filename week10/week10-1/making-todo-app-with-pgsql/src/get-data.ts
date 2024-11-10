import { getClient } from "./utils";

async function getUsers(){
    const client = await getClient();
    const selectUsersText = "SELECT * FROM users";
    const userResponse = await client.query(selectUsersText);
    console.log("Users:");
    for(let user of userResponse.rows){
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getUserFromEmail(email: string) {
    const client = await getClient();
    const SelectUserText = 'SELECT * FROM users WHERE email = $1';
    const userResponse = await client.query(SelectUserText, [email]);
    
    console.log("Single User detail:");
    for(let user of userResponse.rows){
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getUserTodos(userId: number){
    const client = await getClient();
    const selectTodosText  = 'SELECT * FROM todos WHERE user_id = $1';
    const todosResponse = await client.query(selectTodosText, [userId]);

    console.log(`Todos for user ID ${userId}`);
    for(let todo of todosResponse.rows){
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, isDone: ${todo.done}`);
    }
}

getUsers()

getUserFromEmail("testuser1@gmail.com")

const userIdToFetch = 1;
getUserTodos(userIdToFetch)