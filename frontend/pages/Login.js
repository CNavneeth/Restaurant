import Navbarlogin from '../components/Navlogin';
import React, { useState } from 'react';
import axios from 'axios';
import video from '../assets/login.mp4';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/login', { username, password });
      console.log(response.data); 
      window.location.href = '/home'; 
      alert("LOGIN SUCCESSFUL");
    } catch (error) {
      console.error('Error:', error);
      alert("INVALID CREDENTIALS");
    }
  };

  return (
    <div>
        <Navbarlogin/>
        <video src={video} autoPlay loop muted playsInline className="bg_video" />
        <div className='login'>
            <h1>LOGIN</h1>
    <form onSubmit={handleLogin}>
      <input className='box' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className='box' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className='button-64'><span class="text">Login</span></button>
    </form>
        </div>
    </div>
  );
};

export default Login;
