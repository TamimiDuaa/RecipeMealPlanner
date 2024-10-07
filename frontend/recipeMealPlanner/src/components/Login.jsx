import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
        <div className='Forms'>
        <h3>Login to Your Account</h3>
        <form className='loginForm'>

            <input type='email' placeholder='Enter your Email'/>
            <input type='password' placeholder='Enter your Password'/>
            <button className='loginBtn'>Login</button>
        </form>
        <p className='registerLink'>
          Haven't signed up yet? 
            <Link to="/Register"><div>Create an account</div></Link>
          and start your cooking journey today!
        </p>
        </div>
    </>
  )
}

export default Login