import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { initDB, sql } from "./config/db.js";
import productRouter from "./Routes/productRoutes.js";
import { aj } from "./lib/arcjet.js";
//----------------------------
// ✨ dotenv ✨
//----------------------------
dotenv.config();

const app = express();
const PORT = process.env.PORT || 1000;

//---------------------------
// ✨ middlewares ✨
//----------------------------

app.use(express.json());

app.use(cors());

app.use(helmet());
//--------------------------
//📝 Comment: helmet security middleware helps you protect your app from well-known vulnerabilities by setting HTTP headers
//--------------------------

app.use(morgan("dev"));
//--------------------------
//📝 Comment: morgan is a logging middleware for HTTP request
// --------------------------

//----------------------------
// ✨ Apply Arcjet rate limiter ✨
//----------------------------

app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1, //specifies that each request consumes 1 token
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({
          success: false,
          message: "Rate limit exceeded, please try again later",
        });
      } else if (decision.reason.isBot()) {
        res.status(403).json({
          success: false,
          message: "You are blocked, please contact support",
        });
      } else {
        res.status(403).json({
          success: false,
          message: "You are blocked, please contact support",
        });
      }
      return;
    }

    //check for spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      res.status(403).json({
        success: false,
        message: "You are blocked, please contact support",
      });
      return;
    }

    next();
  } catch (error) {
    console.log("error", error);
    next(error);
  }
});

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
app.get("/test", (req, res) => {
  console.log("Hello from Dev");
  res.send("Hello from backend");
});

//Get all products from db
app.use("/api/products", productRouter);
