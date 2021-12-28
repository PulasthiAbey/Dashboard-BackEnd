const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "orders were fetched",
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "POST requests completed",
  });
});

router.get("/:orderId", (req, res) => {
  const orderId = req.params.orderId;
  if (orderId === "special") {
    res.status(200).json({
      message: "Special ID Found",
      id: orderId,
    });
  } else {
    res.status(404).json({
      message: "File not found",
    });
  }
});

router.patch("/:orderId", (req, res) => {
  res.status(200).json({
    message: "updated Product",
  });
});

router.delete("/:orderId", (req, res) => {
  res.status(200).json({
    message: "deleted Product",
  });
});

module.exports = router;
