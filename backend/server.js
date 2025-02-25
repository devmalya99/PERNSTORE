import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./Routes/productRoutes.js"

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
// ✨ routes ✨
//----------------------------


// dummy get req
app.get("/test",(req,res)=>{
    console.log("Hello from Dev")
    res.send("Hello from backend")
})

//Get all products from db
app.get("/api/products",productRoutes)




//----------------------------
// ✨ server ✨
//----------------------------

app.listen(PORT,()=>{
    console.log(`Hello dev Server is running on port ${PORT}`)
})