import React, { useState } from 'react';
import { loginAdmin } from '../services/server';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    // Validation checks
    if (!email || !password) {
      alert('Please fill out both fields.');
      return;
    }

    const status = await loginAdmin(email, password);
    if(status){
      navigate("/dashboard")
    }else{
      alert("Wrong Email or Password")
    }
  };

  return (
    <div className='login-form-body'>
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default LoginAdmin;
