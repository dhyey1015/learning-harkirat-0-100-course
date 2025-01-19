
import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://dhyey:Dhyey1015@localhost/mydb"
})

async function addAddress(
    userId: number, 
    city: string, 
    country: string, 
    street: string, 
    pincode: string,
    username: string, 
    password: string, 
    email: string){
    await client.connect()

    const result = await client.query(`
            BEGIN;

            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ('${userId}', '${city}', '${country}', '${street}', '${pincode}');
            
            INSERT INTO users (username, password, email)
            VALUES ('${username}', '${password}', '${email}');

            COMMIT;
        `)
        console.log(result);
}

addAddress(1, "BVN", "IND", "STREET NO. 9", "364004", "dhyey1015","password", "dhyey1015@gmail.com");