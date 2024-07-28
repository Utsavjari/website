import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import instagram from '../Assets/instagramm.jfif'
import whatsapp from '../Assets/whatsapp.jfif'
import twiter from '../Assets/twiter.png'
import facebook from '../Assets/facebook.jfif'
import youtube from '../Assets/youtube.png'
function footer() {
  return (
    <div className='footer-containers'>
       
        <div className='icons'>
            <ul>
                <li><img src={instagram} alt=''/></li>
                <li><img src={facebook} alt=''/></li>
                <li><img src={twiter} alt=''/></li>
                <li><img src={whatsapp} alt=''/></li>
                <li><img src={youtube} alt=''/></li>

            </ul>
        </div>
        <div className="links">
            <ul>
                <li><Link to='/' style={{textDecoration:"none",color:"antiquewhite"}}>Home</Link></li>
                <li><Link to='/login' style={{textDecoration:"none",color:"antiquewhite"}}>Login</Link></li>
                <li><Link to='/product' style={{textDecoration:"none",color:"antiquewhite"}}>Product</Link></li>
                <li><Link to='/card' style={{textDecoration:"none",color:"antiquewhite"}}>cart</Link></li>
                <li ><Link to='/about' style={{textDecoration:"none",color:"antiquewhite"}}>About</Link></li>
                
                
            </ul>
        </div>
      
      
    </div>
  )
}

export default footer
