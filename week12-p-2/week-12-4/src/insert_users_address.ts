
import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://dhyey:Dhyey1015@localhost/mydb"
})

async function addAddress(userId: number, city: string, country: string, street: string, pincode: string){
    await client.connect()

    const result = await client.query(`
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `,[userId, city, country, street, pincode])
        console.log(result);
}

addAddress(1, "BVN", "IND", "STREET NO. 9", "364004");