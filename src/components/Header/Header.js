import React from 'react'
import "./header.css"
import { BiJoystick } from "react-icons/bi";
import {Link} from "react-router-dom"
import { BsBasket2 } from "react-icons/bs";
import { LuFolderHeart } from "react-icons/lu";
import { FaSignInAlt } from "react-icons/fa";



const Header = () => {

  return (
    <header>
        <div className='logo-container'>
            <Link to="/"><div className='logo'><BiJoystick /></div></Link>
        </div>
        <div className='navbar'>
       
            
            <Link to="/wishlist"><LuFolderHeart /></Link>
            <Link to='/cart'><BsBasket2 /></Link>
            <Link to='/sign-in'><FaSignInAlt /></Link>
        </div>
    </header>
  )
}

export default Header