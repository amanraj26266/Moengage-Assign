import React, { useState } from 'react'
import "../index.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const handleLogin = async () => {
    const data = {
      email,
      password
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', data);
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      if (response.data.token) {
        navigate('/List');
      }
      else {
        alert('Invalid credentials')
      }
    } catch (err) {
      console.error(err);
    }

  }
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

            <input type='email' placeholder='Enter Email' required
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" name="" id="" placeholder='Enter Your Password' required
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>
            <p>do not have an account <a href="Signup">Sign Up </a></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login