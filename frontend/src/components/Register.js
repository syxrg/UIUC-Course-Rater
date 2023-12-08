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
      <h2 style={{ padding: "20px", fontSize: "40px" }}>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <section>
          <div class="form__group field">
            <input
              type="text"
              class="form__field"
              placeholder="Username"
              name="name"
              id="name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="name" class="form__label">
              Username
            </label>
          </div>
          <div class="form__group field">
            <input
              type="password"
              class="form__field"
              placeholder="Password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="name" class="form__label">
              Password
            </label>
          </div>
        </section>
        <br />
        <button class="login-button" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Register;
