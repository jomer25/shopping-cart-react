import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='Navbar'>
            <nav>
                <Link to='/'>
                    Shop Page
                </Link>
                <Link to='/cart'>
                    <ShoppingCart size={32}/>
                </Link>
            </nav>
        </div>
        <Outlet/>
    </>
  )
}

export default Navbar