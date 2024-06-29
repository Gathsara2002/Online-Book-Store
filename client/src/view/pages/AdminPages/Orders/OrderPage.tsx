import React, {useEffect, useState} from 'react';
import {Table, Card, CardBody, CardTitle} from 'reactstrap';
import api from "../../../../axios/axios";

export const OrderPage = () => {

    interface Order {
        orderId: string;
        orderDate: Date;
        totalItems: number;
        total: number;
        customerId: string;
        orderDetails: [{
            bookName: string;
            price: number;
        }];
    }

    const [allOrders, setAllOrders] = useState([]);

    const getAllOrders = () => {

        try {
            api
                .get('/order/')
                .then((res: any) => {
                    console.log("Response from API:", res);
                    setAllOrders(res.data)
                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }

    useEffect(() => {
        getAllOrders();
    }, []);

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString(); // Adjust formatting as per your requirements
    }

    return (
        <div className="w-full p-6 flex justify-center">
            <Card className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white">
                <CardBody className="p-6">
                    <CardTitle tag="h2" className="text-2xl font-semibold mb-4 text-center">
                        Order List
                    </CardTitle>
                    <Table className="w-full border-collapse text-left">
                        <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-700">Order ID</th>
                            <th className="py-3 px-4 border-b border-gray-700">Order Date</th>
                            <th className="py-3 px-4 border-b border-gray-700">Item Count</th>
                            <th className="py-3 px-4 border-b border-gray-700">Total</th>
                            <th className="py-3 px-4 border-b border-gray-700">Customer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {allOrders.map((order: Order) => (
                            <tr key={order.orderId} className="bg-white hover:bg-gray-200">
                                <td className="py-3 px-4 border-b border-gray-300">{order.orderId}</td>
                                <td className="py-3 px-4 border-b border-gray-300">{formatDate(order.orderDate)}</td>
                                <td className="py-3 px-4 border-b border-gray-300">{order.totalItems}</td>
                                <td className="py-3 px-4 border-b border-gray-300">${order.total}</td>
                                <td className="py-3 px-4 border-b border-gray-300">{order.customerId}</td>
                            </tr>
                        ))}
                        {allOrders.length === 0 && (
                            <tr>
                                <td colSpan={12} className="py-3 px-4 text-center">No orders found.</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};
