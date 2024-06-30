const model = require("../model/OrderModel");
const BookModel = require("../model/BookModel");

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
            body.orderId = await OrderController.generateNewOrderId();
            console.log(body);

            // Update book quantities for each book in orderDetails
            const orderDetails = body.orderDetails;

            for (let i = 0; i < orderDetails.length; i++) {
                const bookId = orderDetails[i].bookId;
                const qty = orderDetails[i].qty;

                const updatedBook = await BookModel.findOneAndUpdate(
                    { bookId: bookId },
                    { $inc: { qty: -qty } },
                    { new: true }
                );

                if (!updatedBook) {
                    return res.status(404).json({
                        error: `Book with ID ${bookId} not found!`
                    });
                }
            }

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
    },

    generateNewOrderId: async function () {
        try {
            // Fetch all existing order IDs
            const orders = await model.find({}, {orderId: 1});
            const existingIds = orders.map(order => order.orderId);

            // Extract numeric parts and find the maximum
            const numericParts = existingIds.map(id => parseInt(id));
            let maxNumericPart = Math.max(...numericParts);

            if (maxNumericPart === -Infinity) {
                maxNumericPart = 0; // Start with 0 if no existing IDs
            }

            // Generate new ID
            return (maxNumericPart + 1).toString().padStart(3, '0');
        } catch (error) {
            throw new Error("Could not generate new order ID: " + error.message);
        }
    }

}

module.exports = OrderController;