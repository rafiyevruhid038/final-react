import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const SignIn = () => {
  return (
    <div className="authContainer">
      <h2>Sign In</h2>
      <form className="authForm">
        <div className="formGroup">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="formGroup">
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="authButton">Sign In</button>
      </form>
      <p className="authText">
        Do not have an account? <Link to="/register" className="authLink">Create account</Link>
      </p>
    </div>
  );
}

export default SignIn;
