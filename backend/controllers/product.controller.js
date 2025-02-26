
import {sql} from "../config/db.js"




// 📌 Post route to create a product
export const createProduct = async (req, res) => {

    const {name,price,image,description} = req.body;

    //validation
    if(!name || !price || !image || !description){
        return res.status(400).json({
            success:false,
            error:"All fields are required"
        })
    }

    try {

        const newProduct = await sql `
          INSERT INTO products(name,price,image,description)
          VALUES(${name},${price},${image},${description})
          RETURNING * 
        `
        //Explanation ✨: 
        //RETURNING * : this is a special keyword that returns the data that was just inserted into the database.

        console.log("new product",newProduct[0])

        res.status(200).json({success:true, data:newProduct})
        
    } catch (error) {

        console.log("error",error)
        res.status(500).json({success:false, message:"failed to create product"})
        
    }






};

// 📌 Get route to get all products
export const getProducts = async (req, res) => {
    try {
      
      const products = await sql`

        SELECT * FROM products
        ORDER BY createdAt DESC 
        
        `;
        // ORDER BY createdAt DESC:  it sorts the data in reverse order, meaning from highest to lowest, or from newest to oldest (if sorting by date/time).

        console.log("fetched products",products)

        res.status(200).json({success:true, data:products})

    } catch (error) {

        console.log("error",error)
        res.status(500).json({success:false, message:"failed to get products"})
        
    }
};

// 📌 Get route to get one specific product
export const getProduct = async (req, res) => {

    const {id}  = req.params

    try {

        const product = await sql`
        SELECT * FROM products WHERE id = ${id}
        `

        res.status(200).json({
            success:true, 
            data:product[0]
        })
        
    } catch (error) {
        console.log("error",error)
        res.status(500).json({success:false, message:"failed to get product details"})
    }

};

// 📌 Put route to update product
export const updateProduct = async (req, res) => {

    const {id} = req.params;

    const {name,price,image} = req.body;

    //validation
    if(!name || !price || !image){
        return res.status(400).json({
            success:false,
            error:"All fields are required"
        })
    }

    try {

        const updatedProduct = await sql`
        UPDATE products
        SET name = ${name}, price = ${price}, image = ${image}
        WHERE id = ${id}
        RETURNING *
        `

        if(updateProduct.length === 0){
            return res.status(404).json({
                success:false, 
                message:"product not found"
            })
        }

        res.status(200).json({
            success:true, 
            data:updatedProduct[0]
        })
        
    } catch (error) {

        console.log("error",error)      
        res.status(500).json({
            success:false, 
            message:"failed to update product", 
    })
}

};

// 📌 Delete route to delete product
export const deleteProduct = async (req, res) => {

    const {id} =req.params;
    try {

        const deleteProduct= await sql`
        DELETE FROM products WHERE id = ${id} RETURNING *
        `

        //check if product was deleted
        if(deleteProduct.length === 0){
            return res.status(404).json({   
                success:false,
                message:"product not found"
            })
        }

        res.status(200).json({
            success:true,
            data:deleteProduct[0]
        })
        
    } catch (error) {
        console.log("error in deleting the product",error);
        res.status(500).json({success:false, message:"Internal server errror"})

    }

};
