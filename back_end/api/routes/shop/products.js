const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require(".../models/shop/product");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handle GET requests in shop/products route",
  });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: mongoose.Types.ObjectId,
    name: req.params.name,
    type: req.params.type,
    description: req.params.description,
    price: req.params.price,
    quantity: req.params.quantity,
  });
  res.status(200).json({
    message: "Handle POST requests in shop/products route",
  });
});

router.get("/:productId", (req, res, next) => {
  const productId = req.params.productId;
  if (productId === "special") {
    res.status(200).json({
      message: "Special ID Found",
      id: productId,
    });
  } else {
    res.status(404).json({
      message: "File not found",
    });
  }
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
