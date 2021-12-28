const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());

// Headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

// Root Route
app.get("/", (req, res) => {
  res.status(200).send(`Welcome to SOLITART IT Api`);
});

const productsRoutes = require("../routes/shop/products");
const orderRoute = require("../routes/shop/order");

// Routes
app.use("/shop/products", productsRoutes);
app.use("/shop/order", orderRoute);

// Error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
