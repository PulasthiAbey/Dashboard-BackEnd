const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Products = require("../../models/shop/Products");

router.get("/", (req, res, next) => {
  res.send("This is the products route for the shop");
});

router.get("/viewall", async (req, res) => {
  try {
    console.log("Viewing all the products");
    const product = await Products.find();
    res.json(product);
  } catch (error) {
    res.json({
      message: "Error while finding the products in the collection",
    });
  }
});

router.get("/get/:name", async (req, res) => {
  try {
    const product = await Products.findById(req.params.name);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
    const product = new Products({
      _id: new mongoose.Types.ObjectId(),
      name: req.params.name,
      type: req.params.type,
      description: req.params.description,
      price: req.params.price,
      quantity: req.params.quantity,
    });

//   const productTemp = new Products({
//     _id: new mongoose.Types.ObjectId(),
//     name: "Test",
//     type: "Test Type",
//     description: "This is a test",
//     price: 100,
//     quantity: 250,
//   });
  try {
    const result = await product.save();
    res.json(result);
  } catch (err) {
    res.json({ message: "Error While saving the post" });
    console.log(err);
  }
});

module.exports = router;