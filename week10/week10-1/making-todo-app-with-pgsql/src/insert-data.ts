import { getClient } from "./utils";

async function createEntries(){
    const client = await getClient();
    const insertUserText = "INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id"; // we do this to prevent sql injection
    const userValues = ['testuser1@gmail.com', 'testuser2@gmail.com'];
    let resposne = await client.query(insertUserText, userValues);

    const insertTodosText = "INSERT INTO todos(title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id";
    const todoValues = ["go tp gym", 'got to gym from 7-9 am', resposne.rows[0].id, false];
    await client.query(insertTodosText, todoValues);
    console.log("ADDED the user and todo data");
}

createEntries();