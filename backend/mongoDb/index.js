const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/movieranking";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;
const Product = require("./Product")

const getAllProducts = () => {
return Product.find()

};

const addToCart = (data) =>{
  console.log(data)
  return Cart.create(data)
}
const getCart = () => {
  return Cart.find()
}

const deleteFromCart = (data) => {
  return Cart.deleteOne({ _id: data });
}
const deleteAllCart = ()=>{
  return Cart.deleteMany({})
}
module.exports = {
  db,
  getAllProducts,
  addToCart,
  getCart,
  deleteFromCart,
  deleteAllCart
};
