var express = require('express');
var app = express();
var product_routes = require("./routes/product.routes")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api',[
    product_routes
]);


module.exports = app;