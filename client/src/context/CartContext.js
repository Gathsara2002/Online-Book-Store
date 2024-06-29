import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        setCartItems((prevItems) => [...prevItems, book]);
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};
