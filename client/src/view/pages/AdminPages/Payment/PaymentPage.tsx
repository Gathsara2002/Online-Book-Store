import { Table, Card, CardBody, CardTitle } from 'reactstrap';

export const PaymentPage = () => {
    return (
        <div className="w-full p-6 flex justify-center">
            <Card className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white">
                <CardBody className="p-6">
                    <CardTitle tag="h2" className="text-2xl font-semibold mb-4 text-center">
                        Payment Transactions
                    </CardTitle>
                    <Table className="w-full border-collapse text-left">
                        <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-700">Transaction ID</th>
                            <th className="py-3 px-4 border-b border-gray-700">Amount</th>
                            <th className="py-3 px-4 border-b border-gray-700">Date</th>
                            <th className="py-3 px-4 border-b border-gray-700">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-gray-100 hover:bg-gray-200">
                            <td className="py-3 px-4 border-b border-gray-300">TXN123456</td>
                            <td className="py-3 px-4 border-b border-gray-300">$200.00</td>
                            <td className="py-3 px-4 border-b border-gray-300">2024-06-01</td>
                            <td className="py-3 px-4 border-b border-gray-300">Completed</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-200">
                            <td className="py-3 px-4 border-b border-gray-300">TXN654321</td>
                            <td className="py-3 px-4 border-b border-gray-300">$150.00</td>
                            <td className="py-3 px-4 border-b border-gray-300">2024-06-02</td>
                            <td className="py-3 px-4 border-b border-gray-300">Pending</td>
                        </tr>
                        <tr className="bg-gray-100 hover:bg-gray-200">
                            <td className="py-3 px-4 border-b border-gray-300">TXN789012</td>
                            <td className="py-3 px-4 border-b border-gray-300">$300.00</td>
                            <td className="py-3 px-4 border-b border-gray-300">2024-06-03</td>
                            <td className="py-3 px-4 border-b border-gray-300">Failed</td>
                        </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};
