const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product desccription"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  rating: {
    type: Number,
    required: [true, "Please enter product rating"],
  },
  img: {
    type: Array,
    default: ["There is no img yet"],
    required: [true, "Please provide product img"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
