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
  try {
    const result = await product.save();
    res.json(result);
  } catch (err) {
    res.json({ message: "Error While saving the post" });
    res.status(500).send(err);
  }
});


// router.post("/", (req, res, next) => {
//   const product = new Products({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.params.name,
//     type: req.params.type,
//     description: req.params.description,
//     price: req.params.price,
//     quantity: req.params.quantity,
//   });

//   product
//     .save()
//     .then((result) => {
//       console.log("New Product Created Successfully" + result);
//       res.status(200).json(result);
//     })
//     .catch((error) => {
//       console.log("Error occurred while creating a new product");
//       console.log(error);
//       res.status(500).json(error);
//     });

//   res.status(201).json({
//     message: "Product created successfully",
//     createdProduct: product,
//   });
// });

// router.get("/:productId", (req, res, next) => {
//   const productId = req.params.productId;
//   Products.findById(productId)
//     .exec()
//     .then((doc) => {
//       console.log(doc);
//       res.status(200).json(doc);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.patch("/:productId", (req, res, next) => {
//   res.status(200).json({
//     message: "updated Product",
//   });
// });

// router.delete("/:productId", (req, res, next) => {
//   res.status(200).json({
//     message: "deleted Product",
//   });
// });

module.exports = router;

/*


// add a new Guide to the collection
router.post("/", async (req, res) => {
  const post = new Suggestions({
    locationID: crypto.randomBytes(16).toString("hex"),
    name: req.body.name,
    description: req.body.description,
  });
  try {
    // console.log("Testing the try in the save post item thing", req.body);
    const savedPost = await post.save();
    console.log("Object after the save Post call", savedPost);
    res.json(savedPost);
  } catch (err) {
    console.log("err" + err);
    res.json({ message: "Error While saving the post" });
    res.status(500).send(err);
  }
});

module.exports = router;*/