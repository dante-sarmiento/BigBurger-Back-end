var mongoose = require("mongoose")
var Schema = mongoose.Schema

var Categories = [
    "Hamburguesas",
    "Simples",
    "Dobles",
    "Triples",
    "Vegetarianas",
]

var ProductSchema = new Schema ({
    name: {
        type: String,
        required: true,
        maxlength: 40,
    },
    description: {
        type: String,
        required: true,
        maxlength: 250,
    },
    price: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 10000
    },
    stock: {
        type: Boolean,
        default: true,
    },
    categorie_id: {
        type: String,
        enum: Categories,
        default: "Hamburguesas",
        required: true,
    },
    // cod: {
    //     type: String,
    //     // ref: 'codigo',
    //     maxlength: 4,
    //     minlength: 4
    // },
    cretatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    clientId: {
        type: String,
        ref: "User",
        default: "Unknow"
    }
})

module.exports = mongoose.model("Product", ProductSchema)