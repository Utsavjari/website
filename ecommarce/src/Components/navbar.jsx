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
                    <li onclick={()=>{setMenu("Home")}} > <Link to='/' style={{textDecoration:"none",color:"black"}}>Home</Link></li>
                    <li onclick={()=>{setMenu("Product")}}><Link to='/Product' style={{textDecoration:"none",color:"black"}}>Product</Link>  </li>
                    <li onclick={()=>{setMenu("About")}}> <Link to='/About' style={{textDecoration:"none",color:"black"}}>About Us</Link> </li>
                    <li onclick={()=>{setMenu("Content")}}> <Link to='/Content'style={{textDecoration:"none",color:"black"}}> Content</Link></li>
                </ul>
            </div>
            <div className="addcard">
              <Link to='/cart'> <img src={cart_icon} alt="" /> </Link> 
                <div className='nav-cart-count'><p>0</p></div>
            </div>
            <div className='loginbtn'>
            <button onClick={()=>{setMenu("Login")}}><Link to='/login' style={{textDecoration:"none",color:"black"}}>login</Link></button>
            </div>

        </div>
    )
}

export default Navbar