import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("Login response:", response);

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        setIsLoggedIn(true);
        navigate("/browse");
      } else {
        console.error("Login failed! Wrong user or password");
      }
    } catch (error) {
      console.error("There was an error logging in", error);
    }
  };

  return (
    <div>
      <h2 style={{ padding: "20px", fontSize: "40px" }}>Rate My Courses</h2>
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
        <p style={{ padding: "10px", fontSize: "12px" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#7360ff" }}>
            Create an account
          </Link>
        </p>
        <button class="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
