import React, { useState } from 'react';
import './Logp2.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', username, password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with:', username, password);
  };

  return (
    <div className="login-page">
      <div className="form">
        <h2>{isNewUser ? 'Sign Up' : 'Log In'}</h2>
        <form className="login-form" onSubmit={isNewUser ? handleSignup : handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isNewUser ? 'Sign Up' : 'Log In'}</button>
          <p className="message">
            {isNewUser ? 'Already have an account?' : 'New user?'}
            <button type="button" onClick={() => setIsNewUser(!isNewUser)}>
              {isNewUser ? 'Log In' : 'Sign Up'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
