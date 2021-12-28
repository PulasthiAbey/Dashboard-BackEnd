const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send(`Welcome to SOLITART IT Api`);
});

const productsRoutes = require("../routes/shop/products");

app.use("/shop/products", productsRoutes);

module.exports = app;
