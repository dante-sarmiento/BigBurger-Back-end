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
        res.status(400).send({ ticket: ordersDB })
    }catch(err){
        res.status(403).send(err)

    }

}

module.exports = {createOrder,getOrders
}