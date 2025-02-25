import {neon} from "@neondatabase/serverless";

import dotenv from "dotenv";


dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;


//📌 create sql connection using our own environment variables]

export const sql = neon(
 `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)

// postgresql://neondb_owner:npg_ziq1R8vjPcQp@ep-rough-flower-a8tqgu17-pooler.eastus2.azure.neon.tech/neondb?sslmode=require



export const initDB=async()=>{
    try {
      await sql`
         CREATE TABLE IF NOT EXISTS products(
             id SERIAL PRIMARY KEY,
             name VARCHAR(255) NOT NULL,
             image VARCHAR(255) NOT NULL,
             price DECIMAL(10,2) NOT NULL,
             createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
         )
      `
 
      console.log("Database connected")
    } catch (error) {
     console.log("error",error)
    }
 }