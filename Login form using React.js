import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username.trim()) {
      validationErrors.username = "Please enter a username.";
    }

    if (!password.trim()) {
      validationErrors.password = "Please enter a valid password.";
    }

    if (Object.keys(validationErrors).length === 0) {
      alert("Login successful");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;


