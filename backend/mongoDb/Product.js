const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    Rating:Number,
    Genre: String
  });
  
const Product = mongoose.model("Product", productSchema);

module.exports = Product;