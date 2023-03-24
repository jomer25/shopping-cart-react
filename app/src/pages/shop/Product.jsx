import React, { useContext } from 'react'
import { ShopContext } from '../../components/context/ShopContextProvider'
import './Product.css'

const Product = (props) => {
    const {id, productName, price, image} = props.data
    const {cartItems, addToCart} = useContext(ShopContext);

    const totalAmount = cartItems[id]

  return (
    <div className='Product'>
        <div className='image'>
            <img src={image} alt={productName}/>
        </div>

        <div className='description'>
            <h2>
                {productName}
            </h2>
            <p>
                Price: ${price}
            </p>
        </div>

        <button className='addToCartBtn' onClick={() => addToCart(id)}>Add To Cart {totalAmount > 0 && <>({totalAmount})</>}</button>
    </div>
  )
}

export default Product