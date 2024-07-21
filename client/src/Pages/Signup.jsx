// import React, { useState } from 'react'
// import '../index.css'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/signup', {
//         name,
//         email,
//         password,
//       });
//       console.log(response);
//       localStorage.setItem('token', response.data.token);
//       navigate('/List');
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>

//       <div className="log">
//         <div className="div2">
//           <form action="" onSubmit={handleSubmit}>
//             <div className="page" >
//               <h2>Sign Up Page</h2>
//               <input type="text" name="" id="" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required />
//               <input type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
//               <input type="password" name="" id="" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} required />
//               <button>Sign Up</button>
//               <p>already have an account <a href="Login">Log In </a></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Signup

import React, { useState } from 'react';
import '../index.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
      });
      console.log(response);
      localStorage.setItem('token', response.data.token);
      navigate('/List');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="log">
      <div className="div2">
        <form onSubmit={handleSubmit}>
          <div className="page">
            <h2>Sign Up Page</h2>
            <input
              type="text"
              placeholder='Enter Your Name'
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type='email'
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Enter Your Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
