const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


const cartSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  Rating:Number,
  Genre: String,
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  });
  
const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;