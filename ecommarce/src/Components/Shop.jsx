import React from 'react'
import data_product from '../Assets/Product_list'
import './Shop.css'
import Item from './Item'
import { Link } from 'react-router-dom';
const Shop = () => {
  return (
   
        <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
        { data_product.map((item,i) =>{
        return <Link to='/product' > < Item key={i} id={item.id}
        name={item.name}
        image={item.Image}
        price={item.price}
        button={item.Addtocart}
          />
          </Link>
        
        })
        
    }
  
        </div>
        </div>
      
  )
}

export default Shop
