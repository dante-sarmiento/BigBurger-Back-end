var express = require("express")
var api = express.Router()
var productController = require("../controllers/product.controller")

api.post("/product", productController.addProducts)
api.get("/products", productController.getProducts)
api.get("/product", productController.getProduct)
api.delete("/product/", productController.deleteProduct)
api.put("/product/:upd_id", productController.updateProduct)

module.exports = api
