import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icom from "../Assets/cart_icon.png";

const Navbar = () => {

    const [menu,SetMenu]=useState("Shop")

  return (
    <div className='navbar'>
    <div className='nav-logo'>
      <img src={logo} alt='Logo'/>
      <p>Shopper</p>
    </div>

    <ul className='nav-menu'>
        <li onClick={()=>{SetMenu("Shop")}}>Shop {menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("Men")}}>Men {menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("Women")}}>Women {menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("Kids")}}>Kids {menu==="Kids"?<hr/>:<></>}</li>

    </ul>
     
     <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icom}/>
        <div className='nav-cart-count'>0</div>

     </div>
    </div>
  )
}

export default Navbar