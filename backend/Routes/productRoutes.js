import express from "express";
import { createProduct, getAllProducts } from "../controllers/product.controller.js";

const router = express.Router();

//📌 Get route to get all products 
router.get(("/"),getAllProducts);



//📌 Post route to create a product
router.post(("/"),createProduct);



export default router;


