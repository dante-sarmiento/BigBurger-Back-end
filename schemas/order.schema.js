var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    user:{type: Object,
        required:true},
    cretatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    menu:{
        type: Object,
        required:true,
        default:"Menu Vacio"
    },
    state:{
        type: Boolean,
        required:true,
        default:false
    }

})

module.exports = mongoose.model("Order", OrderSchema)