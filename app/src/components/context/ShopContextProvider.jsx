import React, { createContext, useState } from 'react';
import { PRODUCT } from '../../pages/shop/data/product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < PRODUCT.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalAmout = () => {
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                let itemInfo = PRODUCT.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    };

    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
    };

    const updateCartItems = (id, newAmount) => {
        setCartItems((prev) => ({...prev, [id]: newAmount}))
    };

    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItems, 
        getTotalAmout
    }

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider