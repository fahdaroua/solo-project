const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();

const db = require('./mongoDb')
const {getAllProducts,addToCart , getCart , deleteFromCart ,deleteAllCart} = require ("./mongoDb/index")

app.use(express.json())
app.use(cors());



app.get('/api/products', async (req,res)=> {
    try {
        const products = await getAllProducts()
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json(error)
    }
})

app.post("/api/cart",async (req,res)=> {
    try {
        const product = await addToCart(req.body)
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json(error)
    }
})
app.get("/api/cart",async (req,res)=> {
    try {
        const cartData = await getCart()
        res.status(200).json(cartData);
    }
    catch (error) {
        res.status(500).json(error)
    }
})

app.delete ("/api/cart/:id",async (req,res)=> {
    const id = req.params.id
    try {
        const cartData = await deleteFromCart(id);
        res.status(200).json(cartData);
    }
    catch (error) {
        res.status(500).json(error)
    }
    console.log(id)
})
app.delete ("/api/carts/deleteAll",async (req,res)=> {
    console.log("triggred")
    try {
        const cartData = await deleteAllCart()
        console.log(cartData)
        res.status(200).json(cartData);
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})






app.listen(port, ()=>{
console.log(`listening on ${port}`);
})