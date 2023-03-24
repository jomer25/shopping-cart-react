import React from 'react'
import { PRODUCT } from './data/product'
import Product from './Product'

const ShopPage = () => {
  return (
    <div className='ShopPage'>
        <div className='Title'>
            <h1>Jomer Shopping Cart</h1>
        </div>

        <div className='product'>
            {PRODUCT.map((product) => <Product key={product.id} data={product}/>)}
        </div>
    </div>
  )
}

export default ShopPage