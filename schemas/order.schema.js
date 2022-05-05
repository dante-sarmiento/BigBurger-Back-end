var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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
        type: Boolean,
        default:false
    },
    total:{type:Number}

})

module.exports = mongoose.model("Order", OrderSchema)