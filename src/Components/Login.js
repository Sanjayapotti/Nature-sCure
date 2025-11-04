import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      alert('⚠️ Please fill all fields.');
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert(`✅ Welcome back, ${username}!`);
      navigate('/dashboard');
    } else {
      alert('❌ Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1> Nature’s Cure</h1>
        <p className="subtitle">Login to continue</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <div className="auth-links">
            <Link to="/forgot">Forgot Password?</Link>
            <span> | </span>
            <Link to="/signup">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
