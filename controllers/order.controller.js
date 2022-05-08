var Order = require("../schemas/order.schema")

async function createOrder(req, res){
    // console.log("createOrder escuchando")
    //res.send({message:"create Order escuchando"})
    try{
        if(!req.body) res.status(400).send({message:"El carrito esta vacio"})

        let newOrder = new Order(req.body)
        await newOrder.save()
        res.status(200).send({
            newOrder: newOrder
        })


    }catch(err){
        res.status(403).send(err)
    }
}

async function getOrders(req, res){
    // res.send({message:"get Order escuchando"})

   try{
        const ordersDB = await Order.find().sort({cretatedAt:-1})
        res.status(200).send({ ticket: ordersDB })
    }catch(err){
        res.status(403).send(err)

    }

}
//UPADATE ORDER
async function updateOrder(req, res) {
    const id = req.params.upd_id;

    const orderChangesToApply = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(id, orderChangesToApply, { new: true });
    if(!updatedOrder) return res.status(404).send('No se encontro la orden');
    
    return res.status(200).send(updatedOrder)
}

module.exports = {createOrder,getOrders,updateOrder
}