import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Register() {



  return (
    <>
    <div className='Forms'>
   
        <form className='loginForm' >
        <h3 >Create Your Account</h3>
            <input type="text" name="name" placeholder='Enter your Name'/>
            <input type='email' placeholder='Enter your Email' name="email"/>
            <input type='password' placeholder='Enter Password' name="password"/>
            <input type='password' placeholder='Confirm Password' name="password2"/>

            <button className='loginBtn'>Login</button>
        </form>
        <p>
        Already have an account?
            <Link to="/"><div>Log in here.</div></Link>
          
        </p>
        </div>
    </>
  )
}

export default Register