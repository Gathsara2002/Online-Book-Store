const model = require("../model/OrderModel");

const OrderController = {

    //get orders details
    getAllOrders: async function (req, res, next) {
        try {
            const allOrders = await model.find();
            console.log(allOrders);
            res.status(200).json(allOrders);

        } catch (e) {
            res.status(500).json({
                error: "Orders cant load " + e
            });
        }
    },

    //save order
    saveOrder: async function (req, res, next) {
        try {
            let body = req.body;
            console.log(body);
            let promise = await model.create(body);
            res.status(200).json(promise);

        } catch (err) {
            res.status(500).json({
                error: "Order is not saved " + err
            });
        }
    },

    //delete book
    deleteOrder: async function (req, res, next) {
        try {
            const id = req.params.id;
            const order = await model.deleteOne({orderId: id});

            if (order.deletedCount === 0) {
                return res.status(404).json({
                    error: "Order not found !"
                });
            }
            res.status(200).json(order);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    },

    //update book
    updateOrder: async function (req, res, next) {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedOrder = await model.findOneAndUpdate({
                    orderId: id,
                }, body,
                {new: true}
            );

            if (!updatedOrder) {
                return res.status(404).json({
                    error: "Order not found !"
                });
            }
            res.status(200).json(updatedOrder);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    }

}

module.exports = OrderController;