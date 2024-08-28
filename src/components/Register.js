import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth.js';



const Register = () => {
    const {register} = useAuth();


   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  function handleRegister(event){
    event.preventDefault();
    alert('registration succefully ');

    const payload = { email, password, confirmPassword}
    console.log(email,password);
    register(payload);
    navigate('/login');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    // Simulate successful registration (you can add real API call here)
    console.log('User registered:', email, password);
    
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleRegister}>Register</button>
        {error && <p className="error-text">{error}</p>}
        {/* <button type="submit">Register</button> */}
      </form>
    </div>
  );
};

export default Register;
