import React from 'react'
import "./header.css"
import { BiJoystick } from "react-icons/bi";
import {Link,NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header>
        <div className='logo-container'>
            <Link><div className='logo'><BiJoystick /></div></Link>
        </div>
        <div className='navbar'>
            <NavLink>News</NavLink>
            <NavLink>Top Games</NavLink>
            <Link to="/wishlist">Wishlist</Link>
            <NavLink>Basket</NavLink>
            <NavLink>Sign In</NavLink>
        </div>
    </header>
  )
}

export default Header