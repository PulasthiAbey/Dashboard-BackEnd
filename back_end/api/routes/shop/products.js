const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../../models/shop/Products");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handle GET requests in shop/products route",
  });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.params.name,
    type: req.params.type,
    description: req.params.description,
    price: req.params.price,
    quantity: req.params.quantity,
  });

  product
    .save()
    .then((result) => {
      console.log("New Product Created Successfully" + result);
    })
    .catch((error) => {
      console.log("Error occurred while creating a new product");
      console.log("Error" + error);
    });
  res.status(200).json({
    message: "Handle POST requests in shop/products route",
  });
});

router.get("/:productId", (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "updated Product",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "deleted Product",
  });
});

module.exports = router;
