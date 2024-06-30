import React, { ChangeEvent, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface Book {
    bookId: string;
    bookName: string;
    author: string;
    price: number;
    genre: string;
    qty: number;
    view: string; // Assuming 'view' contains the URL or base64 data of the book image
}

interface Props {
    isOpen: boolean;
    toggle: () => void;
    book: Book;
    onUpdate: (updatedBook: Book) => void;
}

const BookDetailsModal: React.FC<Props> = ({ isOpen, toggle, book, onUpdate }) => {
    const [updatedBook, setUpdatedBook] = useState<Book>({ ...book });
    const [imagePreview, setImagePreview] = useState<string | null>(book.view); // Initial image preview from book's view

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Assuming you handle image preview locally (without uploading immediately)
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                setUpdatedBook(prevState => ({
                    ...prevState,
                    view: reader.result as string // Update book's view with base64 data
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = () => {
        onUpdate(updatedBook);
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered>
            <ModalHeader toggle={toggle} style={{ backgroundColor: '#4a90e2', color: '#fff' }}>Edit Book Details</ModalHeader>
            <ModalBody>
                <div className="mb-4">
                    <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">Book Name</label>
                    <input type="text" id="bookName" name="bookName" value={updatedBook.bookName} onChange={handleChange}
                           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input type="text" id="author" name="author" value={updatedBook.author} onChange={handleChange}
                           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="text" id="price" name="price" value={updatedBook.price.toString()} onChange={handleChange}
                           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
                    <input type="text" id="genre" name="genre" value={updatedBook.genre} onChange={handleChange}
                           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="qty" className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input type="text" id="qty" name="qty" value={updatedBook.qty.toString()} onChange={handleChange}
                           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="bookImage" className="block text-sm font-medium text-gray-700">Book Image</label>
                    <input type="file" id="bookImage" accept="image/*" onChange={handleImageChange} className="mt-1 block w-full" />
                    {imagePreview && (
                        <img src={imagePreview} alt="Book Cover"
                             className="mt-2 rounded-md shadow border border-gray-300"
                             style={{ maxWidth: '100%', maxHeight: '200px' }} />
                    )}
                </div>
            </ModalBody>
            <ModalFooter style={{ backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc' }}>
                <Button color="primary" style={{ backgroundColor: '#4a90e2', border: '1px solid #4a90e2' }} onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default BookDetailsModal;
