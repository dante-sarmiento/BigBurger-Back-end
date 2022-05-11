var express = require("express")
var api = express.Router()
var orderController = require("../controllers/order.controller");
const checkAuthentication = require("../middlewares/authentication");
const isAdmin = require("../middlewares/isAdmin");

api.post("/order", orderController.createOrder)
api.get("/orders", orderController.getOrders)
api.put("/order/:upd_id", [checkAuthentication, isAdmin],orderController.updateOrder)

module.exports = api
