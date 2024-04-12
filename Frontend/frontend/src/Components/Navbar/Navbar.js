import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icom from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,SetMenu]=useState("Shop")

  return (
    <div className='navbar'>
    <div className='nav-logo'>
      <img src={logo} alt='Logo'/>
      <p>Shopper</p>
    </div>

    <ul className='nav-menu'>
        <li onClick={()=>{SetMenu("Shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("Men")}}><Link to='/men' style={{textDecoration:'none'}}>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("Women")}}><Link to='/women' style={{textDecoration:'none'}}>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("Kids")}}><Link to='kids' style={{textDecoration:'none'}}>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>

    </ul>
     
     <div className='nav-login-cart'>
       <Link to='/login'><button>Login</button></Link> 
       <Link to='/cart'><img src={cart_icom}/></Link> 
        <div className='nav-cart-count'>0</div>

     </div>
    </div>
  )
}

export default Navbar