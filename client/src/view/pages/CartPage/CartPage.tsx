import React, {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
import api from "../../../axios/axios";

export const CartPage = () => {
    const {cartItems, setCartItems} = useContext(CartContext);

    // Function to remove item from cart
    const removeFromCart = (bookId: any) => {
        const updatedCart = cartItems.filter((item: any) => item.bookId !== bookId);
        setCartItems(updatedCart);
    };

    // Function to increment quantity of an item
    const incrementQuantity = (bookId: any) => {
        const updatedCart = cartItems.map((item: any) =>
            item.bookId === bookId ? {...item, qty: item.qty + 1} : item
        );
        setCartItems(updatedCart);
    };

    // Function to decrement quantity of an item
    const decrementQuantity = (bookId: any) => {
        const updatedCart = cartItems.map((item: any) =>
            item.bookId === bookId && item.qty > 1 ? {...item, qty: item.qty - 1} : item
        );
        setCartItems(updatedCart);
    };

    // Calculate total items and total price
    const totalItems = cartItems.reduce((sum: any, item: any) => sum + item.qty, 0);
    const totalPrice = cartItems.reduce((sum: any, item: any) => sum + item.price * item.qty, 0);


    //save order
    const handlePayment = async () => {

        const user = localStorage.getItem('COnetoken');
        // @ts-ignore
        const parsedUser = JSON.parse(user);
        const customerId = parsedUser.user.userId;
        console.log(customerId);

        try {
            // Prepare order data to send to the backend
            const orderData = {
                orderDate: new Date().toISOString(),
                totalItems: cartItems.length,
                total: cartItems.reduce((sum: any, item: any) => sum + item.price * item.qty, 0),
                customerId: customerId,
                orderDetails: cartItems.map((item: any) => ({
                    bookId: item.bookId,
                    bookName: item.bookName,
                    price: item.price,
                    qty: item.qty
                }))
            };

            // Send POST request to save the order
            api
                .post('/order/save',orderData)
                .then((res: any) => {
                    console.log("Response from API:", res);
                    // Clear cart after successful order placement
                    setCartItems([]);
                    localStorage.removeItem('cartItems');
                    alert("order saved successfully!");
                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });

        } catch (error) {
            console.error('Error saving order:', error);
        }
    };

    return (
        <section className="w-[100%] pt-32 pb-64 bg-slate-100 ">
            <div className="ml-10">
                <h1 className="text-3xl font-bold">Your Cart Items</h1>

                <div className="mr-10 mt-12 justify-between w-3/6">
                    {cartItems.map((item: any) => (
                        <div key={item.bookId} className="w-full rounded-lg h-40 flex mb-4 bg-white shadow-md p-1">
                            <img
                                src={item.view}
                                alt="image"
                                className="h-full w-auto border-2 border-black p-2 rounded"
                            />
                            <div className="text-[18px] ml-12">
                                <h3>{item.bookName}</h3>
                                <h3 className="mt-3">{item.author}</h3>
                                <h3 className="mt-3">Rs {item.price}</h3>
                                <div className="flex items-center mt-3">
                                    <button
                                        onClick={() => decrementQuantity(item.bookId)}
                                        className="px-3 py-1 rounded-md mr-2 bg-blue-300"
                                    >
                                        -
                                    </button>
                                    <p className="font-bold">{item.qty}</p>
                                    <button
                                        onClick={() => incrementQuantity(item.bookId)}
                                        className="px-3 py-1 rounded-md ml-2 bg-blue-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="ml-[300px]">
                                <h3 className="text-[18px]">Total: Rs {item.price * item.qty}</h3>
                                <button
                                    onClick={() => removeFromCart(item.bookId)}
                                    className="transition-all bg-red-500 text-white px-6 py-2 rounded-lg border-red-600 mt-20
                                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px]
                                    active:brightness-90 active:translate-y-[2px]"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Summary */}
                    <div className="w-2/6 bg-white h-auto absolute right-10 top-52">
                        <div className="h-1/4 bg-cyan-300 p-0.5 text-2xl font-medium text-center">Summary</div>
                        <div className="h-1/4 p-0.5 text-[18px] mt-2 border-b">Total Items: {totalItems}</div>
                        <div className="h-1/4 p-0.5 text-[18px] mt-2 border-b">Total Price: Rs {totalPrice}</div>
                        <button className="transition-all bg-red-500 text-white px-6 py-2 rounded-lg border-red-600 w-full mt-10
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px]
                        active:brightness-90 active:translate-y-[2px]"
                        onClick={handlePayment}>
                            Payment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
