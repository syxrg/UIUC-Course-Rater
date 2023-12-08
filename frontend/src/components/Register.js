import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";


function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        console.log('User created successfully');
        localStorage.setItem("isLoggedIn", "true");  
        localStorage.setItem("username", username); 
        navigate("/browse");
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('There was an error during registration', error);
    }
  };
  

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
      Already have an account? <Link to="/login">Login!</Link>
    </p>
    </div>
  );
}

export default Register;
