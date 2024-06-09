import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Register = () => {
  return (
    <div className="authContainer">
      <h2>Register</h2>
      <form className="authForm">
        <div className="formGroup">
          <label>Name</label>
          <input type="text" required />
        </div>
        <div className="formGroup">
          <label>Surname</label>
          <input type="text" required />
        </div>
        <div className="formGroup">
          <label>Mobile</label>
          <input type="tel" required />
        </div>
        <div className="formGroup">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="formGroup">
          <label>Password</label>
          <input type="password" required />
        </div>
        <div className="formGroup">
          <label>Confirm Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="authButton">Register</button>
      </form>
      <p className="authText">
        Already have an account? <Link to="/sign-in" className="authLink">Sign in</Link>
      </p>
    </div>
  );
}

export default Register;
