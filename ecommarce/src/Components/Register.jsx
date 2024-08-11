import React , { useState }from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import{useNavigate} from 'react-router-dom'

import './loginsignup.css'

const Register = () => {

  const [firstname,setfirstname] =useState ('');
  const [lastname,setlastname]=useState('');
  const [address,setaddress]=useState('');
 const[email,setemail]=useState('');
 const[password,setpassword]=useState('');


  const navigate=useNavigate()

 const submit = async(e)=>
  { 
    e.preventDefault()
    
         await axios.post("http://localhost:8001/auth/register",{
          firstname,lastname,address, email,password})
        .then(result=> {console.log(result)
          if(result.data.message === "user allready exist")
            {
             alert("sorry your are already register login please now");
             navigate('/login');
 
            }
            else
            {
              navigate ('/login');
            }

     
        } )


        .catch(err => console.log(err))

        
    }

  return (
    <div>
      <div className='registerpage'>
      <div className='title'>
        Register Form
      </div>
      <div className='form-field'>
        <form  method="post" onSubmit={submit}>
          <table>
          <tr>
            <label for="first" className='label'>first name:</label><br></br>
            <input type="text" id="inputfirst" className='input' size="50"  onChange={(e)=>{setfirstname(e.target.value)}}/>
          </tr>
            <tr>
            <label for="first" className='label'>Last name:</label><br></br>
            <input type="text" id="inputfirst" className='input' size="50" onChange={(e)=>{setlastname(e.target.value)}} />
          </tr>
          <tr>
            <label for="second" className='label'>Address</label><br></br>
            <input type="text" id="second" className="input" size="50" onChange={(e)=>{setaddress(e.target.value)}}/>
          </tr>
          <tr>
            <label for="second" className='label'>Email</label><br></br>
            <input type="email" id="second" className="input" size="50" onChange={(e)=>{setemail(e.target.value)}} />
          </tr>
          <tr>
            <label for="second" className='label'>Password:</label><br></br>
            <input type="password" id="second" className="input" size="50"  onChange={(e)=>{setpassword(e.target.value)}}/>
          </tr>
         
        </table>
             <button id="btn">Register</button>
        <p className='description'>if you register already then <Link to="/login"> Login</Link></p>

      </form>

    </div>
        </div >
    </div>
  )
}

export default Register
