import React, {useEffect, useState} from 'react';
import {Button, Stack} from "@mui/material";
import {Card, CardBody, CardTitle, Table} from "reactstrap";
import api from "../../../../axios/axios";

export const Products = () => {

    interface Book {
        bookId: string;
        bookName: string;
        author: string;
        price: number;
        genre: string;
        qty: number;
        view: string;
    }

    const [allBooks, setAllBooks] = useState([]);

    // State to hold form data
    const [formData, setFormData] = useState({
        bookName: '',
        author: '',
        price: '',
        genre: '',
        qty: '',
        view: ''
    });
// Function to convert file to base64
    const convertToBase64 = (file: File) => {
        return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    // Handle input change
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, files} = e.target;
        if (name === 'view' && files) {
            const base64Image = await convertToBase64(files[0]);
            setFormData({...formData, [name]: base64Image as string});
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let newBook = {
            bookId: '',
            bookName: formData.bookName,
            author: formData.author,
            price: formData.price,
            genre: formData.genre,
            qty: formData.qty,
            view: formData.view
        }

        //send request
        try {
            api
                .post('/book/save', newBook)
                .then((res: any) => {
                    console.log("Response from API:", res);
                    fetchBookData();
                    alert("Book saved successfully ! ");
                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });
        } catch (error) {
            console.error('Error saving book:', error);
        }
    };

    //get data
    const fetchBookData = () => {
        try {
            api
                .get('/book/')
                .then((res: any) => {
                    console.log("Response from API:", res);
                    setAllBooks(res.data)
                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    useEffect(() => {
        fetchBookData();
    }, []);

    //delete book
    const deleteBook = (id: string) => {
        try {
            api
                .delete(`/book/delete/${id}`)
                .then((res: any) => {
                    console.log("Response from API:", res);
                    fetchBookData();
                    alert("Book successfully deleted!")
                })
                .catch(error => {
                    console.error(error);
                    alert("Failed to delete book. Please try again.");
                });
        } catch (error) {
            console.error('Error :', error);
            alert("Failed to delete book. Please try again.");
        }
    }

    //update book
    const updateBook = (id: string) => {

        let updatedBook = {
            bookId: '',
            bookName: '',
            author: '',
            price: 0,
            genre: '',
            qty: 0,
            view: ''
        }

        try {
            api
                .put(`/book/update/${id}`, updatedBook)
                .then((res: any) => {
                    console.log("Response from API:", res);
                    fetchBookData();
                    alert("Book successfully updated!")
                })
                .catch(error => {
                    console.error(error);
                    alert("Failed to update book. Please try again.");
                });
        } catch (error) {
            console.error('Error :', error);
            alert("Failed to update book. Please try again.");
        }
    }

    return (
        <div className="p-4">
            <div className="overflow-auto h-full">
                {/* Form Section */}
                <div className="p-3 mt-4 bg-white rounded-md shadow-xl shadow-gray-400">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex space-x-10">
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Book Name</label>
                                <input
                                    type="text"
                                    name="bookName"
                                    value={formData.bookName}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Author</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-10 mt-3">
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Genre</label>
                                <input
                                    type="text"
                                    name="genre"
                                    value={formData.genre}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Qty</label>
                                <input
                                    type="text"
                                    name="qty"
                                    value={formData.qty}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-1/3">
                                <label className="block text-sm text-gray-800">Image</label>
                                <input
                                    type="file"
                                    name="view"
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <Stack spacing={3} direction="row" className="mt-4 justify-end">
                            <Button type={"submit"} variant="contained">Add</Button>
                            <Button variant="contained">Delete</Button>
                            <Button variant="contained">Update</Button>
                        </Stack>
                    </form>
                </div>

                {/* Table */}
                <div className="w-full p-6 flex justify-center">
                    <Card className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white">
                        <CardBody className="p-6">
                            <CardTitle tag="h2" className="text-2xl font-semibold mb-4 text-center">
                                Book List
                            </CardTitle>
                            <Table hover={true} className="w-full border-collapse text-left">
                                <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="py-3 px-4 border-b border-gray-700">Book ID</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Book Name</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Author</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Price</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Genre</th>
                                    <th className="py-3 px-4 border-b border-gray-700">QTY</th>
                                    <th className="py-3 px-4 border-b border-gray-700">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* Render your data here */}
                                {allBooks.map((book: Book, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-2">{book.bookId}</td>
                                        <td className="py-2 px-2">{book.bookName}</td>
                                        <td className="py-2 px-2">{book.author}</td>
                                        <td className="py-2 px-2">{book.price}</td>
                                        <td className="py-2 px-2">{book.genre}</td>
                                        <td className="py-2 px-2">{book.qty}</td>
                                        <td className="py-2 px-2">
                                            <Button variant="contained"
                                                    onClick={() => deleteBook(book.bookId)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
