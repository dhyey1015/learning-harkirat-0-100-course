import { Client } from "pg";

export async function getClient() {
    const client = new Client("postgresql://dhyey:Dhyey1015@localhost:5432/dhyey_my_database");
    await client.connect();
    return client;
}