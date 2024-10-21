import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [email, setEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual authentication logic
    if (username && password) {
      onLogin(true); // Simulate a successful login
    }
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const existingUser = localStorage.getItem(regUsername);

    if (existingUser) {
      setRegistrationMessage('Username already taken. Please choose a different username.');
    } else {
      // Store user data in local storage
      const userData = { username: regUsername, email, password: regPassword };
      localStorage.setItem(regUsername, JSON.stringify(userData)); // Save user data with username as the key
      setRegistrationMessage('Registration successful! You can now log in.');
      
      // Clear the registration fields
      setRegUsername('');
      setEmail('');
      setRegPassword('');
    }
  };

  return (
    <div>
      <h1>Around You</h1>
      <h3>Are you ready for history to <span>come alive?</span></h3>
      <div id="login">
        <h2>Adventurer's Login:</h2>
        <form onSubmit={handleLoginSubmit}>
        <div class="form-container">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div class="form-container">
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>

      <h2>New Adventurer?</h2>
      <form id="registration-form" onSubmit={handleRegistrationSubmit}>
        <div>
          <label htmlFor="reg-username" class="form-container">Username:</label>
          <input
            type="text"
            id="reg-username"
            name="username"
            value={regUsername}
            onChange={(e) => setRegUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" class="form-container">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="reg-password" class="form-container">Password:</label>
          <input
            type="password"
            id="reg-password"
            name="password"
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form></div>
    </div>
  );
};

          export default Login;