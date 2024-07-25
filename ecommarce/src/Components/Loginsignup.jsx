import React from 'react'
import './loginsignup.css'
const Loginsignup = () => {
  return (
    <div className='loginpage'>
      <div className='title'>
        Login Form
      </div>
      <div className='form-field'>
        <form>
          <table>
            <tr>
            <label for="first" className='label'>UserName</label><br></br>
            <input type="text" id="inputfirst" className='input' size="50" />
          </tr>
          <tr>
            <label for="second" className='label'>Password</label><br></br>
            <input type="password" id="second" className="input" size="50" />
          </tr>
          <div className='checkbox'>
         <input type='checkbox'></input>
         <label>Remember me</label>
         </div>
        </table>
             <button id="btn">Login</button>
        <p className='description'>if you no have account then <a>register</a></p>

      </form>

    </div>
        </div >
  )
}

export default Loginsignup