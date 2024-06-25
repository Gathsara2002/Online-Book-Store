import {Button, Stack} from "@mui/material";
import {Card, CardBody, CardTitle, Table} from "reactstrap";

export const Products = () => {

    return (
        <div className="p-4">
            <div className="overflow-auto h-full">
                {/* Form Section */}
                <div className="p-3 mt-4 bg-white rounded-md shadow-xl shadow-gray-400">
                    <form className="space-y-6">
                        <div className="flex space-x-10">
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Username</label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Username</label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Username</label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                        </div>
                        <div className="flex space-x-10 mt-3">
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Username</label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Username</label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Username</label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                        </div>
                        <div className="flex space-x-5 mt-3">
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Username</label>
                                <input type="text"
                                       className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                        </div>
                        <Stack spacing={2} direction="row" className="mt-4 justify-end">
                            <Button variant="contained">Add</Button>
                            <Button variant="contained">Delete</Button>
                            <Button variant="contained">Update</Button>
                        </Stack>
                    </form>
                </div>

                {/* Another Form Section */}
                <div className="w-full p-6 flex justify-center">
                    <Card className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white">
                        <CardBody className="p-6">
                            <CardTitle tag="h2" className="text-2xl font-semibold mb-4 text-center">
                                Product List
                            </CardTitle>
                            <Table className="w-full border-collapse text-left">
                                <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="py-3 px-4 border-b border-gray-700">Product ID</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Name</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Price</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Stock</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Category</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="bg-gray-100 hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">PROD001</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Laptop</td>
                                    <td className="py-3 px-4 border-b border-gray-300">$1200.00</td>
                                    <td className="py-3 px-4 border-b border-gray-300">10</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Electronics</td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">PROD002</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Smartphone</td>
                                    <td className="py-3 px-4 border-b border-gray-300">$800.00</td>
                                    <td className="py-3 px-4 border-b border-gray-300">25</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Electronics</td>
                                </tr>
                                <tr className="bg-gray-100 hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">PROD003</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Headphones</td>
                                    <td className="py-3 px-4 border-b border-gray-300">$150.00</td>
                                    <td className="py-3 px-4 border-b border-gray-300">50</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Accessories</td>
                                </tr>
                                <tr className="bg-gray-100 hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">PROD003</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Headphones</td>
                                    <td className="py-3 px-4 border-b border-gray-300">$150.00</td>
                                    <td className="py-3 px-4 border-b border-gray-300">50</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Accessories</td>
                                </tr>
                                <tr className="bg-gray-100 hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">PROD003</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Headphones</td>
                                    <td className="py-3 px-4 border-b border-gray-300">$150.00</td>
                                    <td className="py-3 px-4 border-b border-gray-300">50</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Accessories</td>
                                </tr>
                                <tr className="bg-gray-100 hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">PROD003</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Headphones</td>
                                    <td className="py-3 px-4 border-b border-gray-300">$150.00</td>
                                    <td className="py-3 px-4 border-b border-gray-300">50</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Accessories</td>
                                </tr>
                                <tr className="bg-gray-100 hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">PROD003</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Headphones</td>
                                    <td className="py-3 px-4 border-b border-gray-300">$150.00</td>
                                    <td className="py-3 px-4 border-b border-gray-300">50</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Accessories</td>
                                </tr>
                                <tr className="bg-gray-100 hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">PROD003</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Headphones</td>
                                    <td className="py-3 px-4 border-b border-gray-300">$150.00</td>
                                    <td className="py-3 px-4 border-b border-gray-300">50</td>
                                    <td className="py-3 px-4 border-b border-gray-300">Accessories</td>
                                </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
