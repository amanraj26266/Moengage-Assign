import React from 'react'
import "../index.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="log">
        <div className="div1">
          <h1>Hello Coder</h1>
          <h2>We are the HTTP dogs</h2>

        </div>
        <div className="div2">
          <div className="page">
            <h2>Login Page</h2>

            <input type='email' placeholder='Enter Email' required />
            <input type="password" name="" id="" placeholder='Enter Your Password' required />
            <button onClick={() => navigate('/List')}>Log In</button>
            <p>do not have an account <a href="Signup">Sign Up </a></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login