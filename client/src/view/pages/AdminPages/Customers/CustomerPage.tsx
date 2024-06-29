import { Table, Card, CardBody, CardTitle } from 'reactstrap';

export const CustomerPage = () => {
    return (
        <div className="w-full p-6 flex justify-center mt-6">
            <Card className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white">
                <CardBody className="p-6">
                    <CardTitle tag="h2" className="text-2xl font-semibold mb-4 text-center">
                        Customer List
                    </CardTitle>
                    <Table className="w-full border-collapse text-left">
                        <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-700">UserId</th>
                            <th className="py-3 px-4 border-b border-gray-700">Full Name</th>
                            <th className="py-3 px-4 border-b border-gray-700">Address</th>
                            <th className="py-3 px-4 border-b border-gray-700">Contact</th>
                            <th className="py-3 px-4 border-b border-gray-700">Email</th>
                            <th className="py-3 px-4 border-b border-gray-700">Password</th>
                            <th className="py-3 px-4 border-b border-gray-700">Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white hover:bg-gray-200">
                            <th scope="row" className="py-3 px-4 border-b border-gray-300">2</th>
                            <td className="py-3 px-4 border-b border-gray-300">Jacob</td>
                            <td className="py-3 px-4 border-b border-gray-300">Thornton</td>
                            <td className="py-3 px-4 border-b border-gray-300">@fat</td>
                        </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};
