{/*import React, { useEffect,useState } from 'react'
                                                                                                                                                                                                                                                                                                                                                                                                                                          
function Product() {
    const [data, setData] = useState([]);

    const dispatch=useDispatch();
      useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((json) => {
            const updatedData = json.map((item) => ({ ...item, quantity: 1 }));
            setData(updatedData);
          });
      }, []);
   
    const CartData=(item)=>{
      
        setTimeout(() => {
            dispatch(addCart(item))
        }, [1000]);
    
    }
      const containerStyle = {
        height: "90vh",
        width: "99%",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4"
      };
    
      const cardStyle = {
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width: "300px",
        transition: "transform 0.2s",
      };
    
      const cardImageStyle = {
        width: "100%",
        height: "150px",
        objectFit: "contain",
      };
    
      const cardBodyStyle = {
        padding: "15px",
      };
    
      const cardTitleStyle = {
        fontSize: "1.2em",
        margin: "0",
        color: "#333",
      };
    
      const cardLinkStyle = {
        fontSize: "1.5em",
        color: "#e91e63",
        margin: "0",
        textDecoration: "none",
      };
    
      return (
        <div style={containerStyle}>
          {data.length>0? data.map((item, index) => (
            <div key={index} className="card" style={cardStyle}>
              <img className="card-img-top" src={item.image} alt={item.title} style={cardImageStyle} />
              <div className="card-body" style={cardBodyStyle}>
                <h5 className="card-title" style={cardTitleStyle}>{item.title.slice(0,20)}</h5>
              </div>
              <ul className="list-group list-group-flush"></ul>
              <div className="card-body" style={cardBodyStyle}>
                <a href="#" className="card-link" style={cardLinkStyle}>${item.price}</a>
               
              </div>
              <button className='btn btn-dark btn-lg' onClick={()=>CartData(item)}>Add to Cart</button>
            </div>
          )):<>
          <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></>}
        </div>
      );
}

export default Product
*/}
