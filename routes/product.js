const express = require("express");
const {
  create,
  getProduct,
  productById,
  deleteProduct,
  getPhoto,
} = require("../controllers/product");

const router = express.Router();

router.post("/product/create", create);
router.get("/product/:productId", getProduct);
router.param("productId", productById);
router.delete("/product/:productId/:userId", deleteProduct);
router.get("/product/photo/:productId", getPhoto);

module.exports = router;
