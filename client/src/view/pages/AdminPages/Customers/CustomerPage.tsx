import {Table, Card, CardBody, CardTitle} from 'reactstrap';
import api from "../../../../axios/axios";
import {useEffect, useState} from "react";

export const CustomerPage = () => {

    interface User {
        userId: string;
        name: string;
        address: string;
        contact: number;
        email: string;
        password: string;
    }

    const [allCustomers, setAllCustomers] = useState([]);

    //get data
    const getAllCustomers = () => {

        try {
            api
                .get('/user/')
                .then((res: any) => {
                    console.log("Response from API:", res);
                    setAllCustomers(res.data)
                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    useEffect(() => {
        getAllCustomers();
    }, []);

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
                        </tr>
                        </thead>
                        <tbody>
                        {allCustomers.length === 0 ? (
                            <tr>
                                <td colSpan={12} className="py-3 px-4 text-center font-bold">No customers found.</td>
                            </tr>
                        ) : (
                            allCustomers.map((customer: User) => (
                                <tr key={customer.userId} className="bg-white hover:bg-gray-200">
                                    <td className="py-3 px-4 border-b border-gray-300">{customer.userId}</td>
                                    <td className="py-3 px-4 border-b border-gray-300">{customer.name}</td>
                                    <td className="py-3 px-4 border-b border-gray-300">{customer.address}</td>
                                    <td className="py-3 px-4 border-b border-gray-300">{customer.contact}</td>
                                    <td className="py-3 px-4 border-b border-gray-300">{customer.email}</td>
                                    <td className="py-3 px-4 border-b border-gray-300">{customer.password}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};
