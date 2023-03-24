import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../components/context/ShopContextProvider'
import { PRODUCT } from '../shop/data/product'
import CartItem from './CartItem';
import './Cart.css'

const CartPage = () => {
    const {cartItems, getTotalAmout} = useContext(ShopContext);
    const navigate = useNavigate()
    
    const totalAmount = getTotalAmout()

  return (
    <div className='CartPage'>
        <div className='Title'>
            <h1>Your Cart</h1>
        </div>

        <div className='item'>
            {PRODUCT.map((product) => {
                if(cartItems[product.id] !== 0){
                    return <CartItem key={product.id} data={product}/>
                }
            })}
        </div>

        {totalAmount > 0 ? (
            <div className='checkOut'>
                <p>Subtotal Amount: ${totalAmount}</p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>Check Out</button>
            </div>
        ) : (
            <>Your Cart is Empty</>
        )}
        
    </div>
  )
}

export default CartPage