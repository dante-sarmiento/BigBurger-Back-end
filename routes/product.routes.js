var express = require("express")
var api = express.Router()
var productController = require("../controllers/product.controller")
const checkAuthentication = require('../middlewares/authentication')
const isAdmin = require('../middlewares/isAdmin')

api.post("/product", [checkAuthentication, isAdmin] ,productController.addProducts)
api.get("/products", productController.getProducts)
api.get("/product", productController.getProduct)
api.delete("/product/", [checkAuthentication, isAdmin] ,productController.deleteProduct)
api.put("/product/upd_id", [checkAuthentication, isAdmin] ,productController.updateProduct)

module.exports = api
