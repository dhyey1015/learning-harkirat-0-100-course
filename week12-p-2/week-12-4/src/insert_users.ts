import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://dhyey:Dhyey1015@localhost/mydb"
});
// wrong way -- 
// const result = await client.query(`
//     INSERT INTO users (username, password, email)
//     VALUES ('username', 'password', 'email')
// `);

//to avoid
async function insertUserData(username: string, password: string, email: string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ('$1', '$2', '$3')
    `, [username, password, email]);
    console.log(result);
}

insertUserData("harry11","password","harry@gmail11.com");