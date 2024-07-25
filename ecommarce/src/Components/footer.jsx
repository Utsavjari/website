import React from 'react'
import './footer.css'
import whatapp from '../Assets/whatsapp.jfif'
import facebook from '../Assets/facebook.png'
import twiter from '../Assets/twiter.png'
import instagram from '../Assets/instagram.jfif'
import youtub from '../Assets/youtub.png'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className='footer-container'>
       <div className='logos'>
        <ul>
           <li><img src={instagram} alt=''/></li>
           <li><img src={whatapp} alt=''/></li>
           <li><img src={facebook} alt=''/></li>            
           <li><img src={youtub} alt=''/></li>
           <li><img src={twiter} alt=''/></li>
         </ul>
        </div> 
       <div className='links'>
    <ul>
        <li><Link to='Home' style={{textDecoration:'none',color:'white'}}>Home</Link></li>
        <li><Link to='Login' style={{textDecoration:'none',color:'white'}}>Login</Link></li>
        <li><Link to='Product'style={{textDecoration:'none',color:'white'}}>Product</Link></li>
        <li><Link to='Cart'style={{textDecoration:'none',color:'white'}}>Cart</Link></li>
        <li><Link to='About'style={{textDecoration:'none',color:'white'}}>About</Link></li>
    </ul>

       </div>
       <div className='footer-end'> 

        <p>copyright C2024<i>Design by:</i></p>

       </div>

    </div>
  )
}

export default Footer