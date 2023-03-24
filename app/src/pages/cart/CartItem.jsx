import React, { useContext } from 'react'
import { ShopContext } from '../../components/context/ShopContextProvider'
import './Cart.css'

const CartItem = (props) => {
    const {id, productName, price, image} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItems} = useContext(ShopContext)


  return (
    <div className='Cart'>
        <div className='image'>
            <img src={image} alt={productName}/>
        </div>

        <div className='description'>
            <h2>
                {productName}
            </h2>
            <p>Price: ${price}</p>
        </div>

        <div className='Actions'>
            <button onClick={() => removeFromCart(id)}> - </button>
            <input 
                value={cartItems[id]}
                onChange={(e) => updateCartItems(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button>
        </div>
    </div>
  )
}

export default CartItem