var express = require("express")
var api = express.Router()
var orderController = require("../controllers/order.controller");

api.post("/order", orderController.createOrder)
// api.get("/orders", orderController.listOrders)