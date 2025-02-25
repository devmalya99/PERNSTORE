import express from "express";
import { 

    createProduct, 
    deleteProduct, 
    getProducts, 
    getProduct, 
    updateProduct 

} from "../controllers/product.controller.js";

const router = express.Router();



//📌 Get route to get all products 🎲🔮🪄♟️
router.get(("/"),getProducts);


//📌 Post route to create a product 
router.post(("/create"),createProduct);


//📌 Get route to get one specific product 🎁
router.get(("/:id"),getProduct);

//📌 Put route to update product ✒️
router.put(("/:id"),updateProduct);

//📌 Put route to delete product 🗑️
router.delete(("/:id"),deleteProduct);



export default router;


