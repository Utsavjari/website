import React, { useState } from 'react';
import './navbar.css';
import cart_icon from '../Assets/cart_icon.jfif'
import logo from '../Assets/logo.jfif'
import { Link } from 'react-router-dom';
 
const Navbar = () => {
    const [menu,setMenu] = useState("Home");
    return (
        <div className="navbar-container">
            <div className="navbar-icon">
                <img src={logo} alt="" />
                <div className="icon">icone</div>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li onclick={()=>{setMenu("Home")}} ><Link to='/'>Home</Link></li>
                    <li onclick={()=>{setMenu("Product")}}><Link to='/Product'>Product</Link>  </li>
                    <li onclick={()=>{setMenu("About")}}> <Link to='/About'>About Us</Link> </li>
                    <li onclick={()=>{setMenu("Content")}}> <Link to='/Content'> Content</Link></li>
                </ul>
            </div>
            <div className="addcard">
              <Link to='/cart'> <img src={cart_icon} alt="" /></Link> 
                <div className='nav-cart-count'>0</div>
            </div>
            <button onClick={()=>{setMenu("Login")}}><Link to='/login'>login</Link></button>
           

        </div>
    )
}

export default Navbar