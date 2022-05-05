
var express = require('express');
var app = express();
var product_routes = require("./routes/product.routes")


app.use(express.json())
app.use(express.urlencoded({extended:false}))


let express = require('express');
let app = express();
let user_routes = require('./routes/user.routes');
let product_routes = require("./routes/product.routes")
let order_routes = require("./routes/order.routes")
let cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api',[
    user_routes,
    product_routes,
    order_routes

]);


module.exports = app;