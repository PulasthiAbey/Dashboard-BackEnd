const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("express").json;
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware configuration
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser());

// database connections
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASSWD +
      "@solitarit.yh2j2.mongodb.net/SOLITARIT?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

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

const productsRoutes = require("./api/routes/shop/products");
const orderRoute = require("./api/routes/shop/order");

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

//listening from the server_error
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
