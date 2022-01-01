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
    const product = await Products.find(req.params.name);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.json({ message: "error occurred while getting the value" });
  }
});

router.post("/", async (req, res) => {
  const product = new Products({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  console.log(product);
  try {
    const result = await product.save();
    res.json(result);
    console.log("Saved Successfully");
  } catch (err) {
    res.json({ message: "Error While saving the post" });
    console.log(err);
  }
});

module.exports = router;