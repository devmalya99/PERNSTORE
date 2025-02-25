import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import { initDB, sql } from "./config/db.js"
import { getProducts } from "./controllers/product.controller.js"

//----------------------------
// ✨ dotenv ✨
//----------------------------
dotenv.config()



const app = express()
const PORT = process.env.PORT || 1000


//---------------------------
// ✨ middlewares ✨
//----------------------------

app.use(express.json())


app.use(cors())


app.use(helmet()) 
//--------------------------
//📝 Comment: helmet security middleware helps you protect your app from well-known vulnerabilities by setting HTTP headers
//--------------------------


   app.use(morgan("dev"))
//--------------------------
//📝 Comment: morgan is a logging middleware for HTTP request
// --------------------------


//----------------------------
// ✨ Initialise and connect Database ✨
//----------------------------

const startServer = async () => {
    try {
      await initDB(); // Ensure DB is connected first
      console.log("Database connected");
      
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
      
    } catch (error) {
      console.log("Database connection failed", error);
    }
  };
  
  startServer();


// dummy get req
app.get("/test",(req,res)=>{
    console.log("Hello from Dev")
    res.send("Hello from backend")
})

//Get all products from db
app.get("/api/products",getProducts)




