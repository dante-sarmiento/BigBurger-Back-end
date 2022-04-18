var Order = require("../schemas/order.schema")

async function createOrder(req, res){
    console.log("createOrder escuchando")
    res.send({message:"create Order escuchando"})
//     try{
//         if(!req.body) res.status(400).send({message:"El carrito esta vacio"})

//         let newOrder = new Order(req.body)
//         await newOrder.save()
//         res.send({
//             newOrder: newOrder
//         })


//     }catch(err){
//         res.status(404).send(err)
//     }
// }
// async function updateOrder(req,res){
//     await res.send("pedido actualizado")
}

module.exports = {createOrder,
}