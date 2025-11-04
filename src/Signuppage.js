import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert('⚠️ Please fill all fields.');
      return;
    }

    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('✅ Account created successfully! Please login.');
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Create Account</h1>
        <p className="subtitle">Join Nature’s Cure</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>

          <div className="auth-links">
            <Link to="/">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
