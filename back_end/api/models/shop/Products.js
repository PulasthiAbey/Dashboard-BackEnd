const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: "string",
    required: true,
  },
  type: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  quantity: {
    type: "number",
    required: true,
  },
});

module.exports = mongoose.model("Products", productSchema);
