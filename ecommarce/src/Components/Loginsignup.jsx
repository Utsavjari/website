import React, { useState } from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './loginsignup.css'


const Loginsignup = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

 const navigate=useNavigate();




  axios.defaults.withCredentials=true;
        const login = (e) => {
          e.preventDefault()
          axios.post("http://localhost:8001/auth/login", { email, password })
          .then(result => {
              console.log(result)
           if(result.data.message === "user is not register")
           {
            alert("Email is not exist check again !")
            navigate('/register');


           }

         else if(result.data.message === "password is not correct")
             {
              alert("Sorry something is wrong please try again!")
             }
             else
             {
              alert("Login successfully")
              navigate('/');

             }
          })
          .catch(err => console.log(err))
      }


  return (
    <div className='loginpage'>
      <div className='title'>
        Login Form
      </div>
      <div className='form-field'>
        <form>
          <table>
            <tr>
            <label for="first" className='label'>Email</label><br></br>
            <input type="text" id="inputfirst" className='input' size="50" onChange={(e) => { setemail(e.target.value) }}  />
          </tr>
          <tr>
            <label for="second" className='label'>Password</label><br></br>
            <input type="password" id="second" className="input" size="50" onChange={(e) => { setpassword(e.target.value) }} />
          </tr>
          <div className='checkbox'>
         <input type='checkbox'></input>
         <label>Remember me</label>
         </div>
        </table>
             <button id="btn" onClick={login}>Login</button>
        <p className='description'>if you no have account then <Link to="/register"> Register</Link></p>

      </form>

    </div>
        </div >
  )
}

export default Loginsignup