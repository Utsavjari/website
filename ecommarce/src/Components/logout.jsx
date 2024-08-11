/*import React from 'react'
import axios from 'axios'
const logout = () => {

    const logouts = async(e)=>
        { 
          e.preventDefault()
          
               await axios.post("http://localhost:8001/auth/logout",{})
              .then(result=> {console.log(result)
           
              } )
        .catch(err => console.log(err))
              
      }
  return (
    <div>
        <input type="submit" value="logout" style={{backgroundColor:"red",color:"black"}} onclick="logouts" ></input>

       </div>
  )
}

export default logout*/
