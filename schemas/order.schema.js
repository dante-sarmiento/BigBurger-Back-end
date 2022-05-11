var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var estadosValidos = [
    'pendiente',
    'realizado'

]
var OrderSchema = new Schema({
    user:{type: Object,
        required:true},
    cretatedAt: {
        type: Date,
        default: Date.now
    },
    menu:{
        type: Object,
        required:true,
        default:"Menu Vacio"
    },
    state:{
        type: String,
        enum: estadosValidos,
        default:'pendiente'
    },
    total:{type:Number}

})

module.exports = mongoose.model("Order", OrderSchema)