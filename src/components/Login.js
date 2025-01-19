import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple authentication (you can replace this with real authentication logic)
    if (username === 'admin' && password === 'password123') {
      setIsLoggedIn(true);  // Store login status
      navigate('/admin');   // Redirect to admin dashboard
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow-lg rounded" style={{ width: '400px' }}>
        <div className="card-body">
          <h2 className="text-center text-primary mb-4">Admin Login</h2>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="text-danger text-center mb-3">{errorMessage}</p>}
          <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
