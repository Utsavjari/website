import React from 'react'
import './Hero.css';

import label from '../Assets/homelabel.jpg';
import kids from '../Assets/kids.jpeg';
import men from '../Assets/men2.jpeg';
import women from '../Assets/women1.jpg';


const Hero = () => {

  return (
  
    <div className='hero-container'>
      <div className='label-container'>

        <div className='label'>
          <img src={label} alt='label' id='label-img' />
        </div>
                 
         <div className="title-container">
             <div className="label-title" > welcom to store</div><br/>
      
          </div>
                 <button className='labelbtn'>buy now</button>
      </div>

      <div className='category-container'>
       <p id='p'>categorys</p>
        <div className='category-list'>
          <div className='list'>
          
          <div><img src={men} alt='men' className='category-img' /></div>
              <span  style={{fontSize:"20px",fontFamily:"600", marginLeft:"25px"}}>Men cloth</span><br></br>
                
                 <span>   <button className='categorytn'>buy now</button></span>
          </div>
          <div className='list'>
              <div><img src={women} alt='women' className='category-img' /></div>
              <span  style={{fontSize:"20px",fontFamily:"600", marginLeft:"25px"}}>Women cloth</span><br></br>
              <span><button className='categorytn'>buy now</button></span>
             
          </div>
          <div className='list'>
              <div><img src={kids} alt='kids' className='category-img' /></div>
              <span style={{fontSize:"20px",fontFamily:"600", marginLeft:"25px"}}>Kids cloth</span><br></br>
              <span><button className='categorytn'>buy now</button></span>
          </div>
        </div>
      </div>




    </div>

   




  )
}

export default Hero