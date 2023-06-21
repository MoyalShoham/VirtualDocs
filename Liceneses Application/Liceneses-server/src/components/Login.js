// src/components/Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Perform login logic here
    // Example: validate credentials, set authentication state, etc.
    // For simplicity, we'll assume the login is successful
    history.push('/licenses');
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.input}
        />
        <button type="button" onClick={handleLogin} className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
