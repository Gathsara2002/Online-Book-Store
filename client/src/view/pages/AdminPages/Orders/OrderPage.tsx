import React from 'react';
import { Table, Card, CardBody, CardTitle } from 'reactstrap';

export const OrderPage = () => {
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
                        <tr className="bg-white hover:bg-gray-200">
                            <td className="py-3 px-4 border-b border-gray-300">ORD654321</td>
                            <td className="py-3 px-4 border-b border-gray-300">Jane Smith</td>
                            <td className="py-3 px-4 border-b border-gray-300">2024-06-02</td>
                            <td className="py-3 px-4 border-b border-gray-300">$120.00</td>
                            <td className="py-3 px-4 border-b border-gray-300 text-yellow-500">Pending</td>
                        </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};
