let express = require('express');
let app = express();
let user_routes = require('./routes/user.routes');
let cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', [
    user_routes,
])




module.exports = app;