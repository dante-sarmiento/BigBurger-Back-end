
let express = require('express');
let app = express();
let user_routes = require('./routes/user.routes');
let product_routes = require("./routes/product.routes")
let cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api',[
    user_routes,
    product_routes
]);


module.exports = app;