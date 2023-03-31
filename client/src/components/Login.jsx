import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});
  const [emailNotFoundErr, setEmailNotFoundErr] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/login', userData, {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/Home');
      })
      .catch((err) => {
        // console.log('*********************', err.response.data);
        setEmailNotFoundErr(err.response.data.msg);
        const errResponse = err.response.data.errors;
        console.log(errResponse);
        const errObj = {};
        for (const key of Object.keys(errResponse)) {
          errObj[key] = errResponse[key].message;
        }
        setErrors(errObj);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            onChange={handleChange}
          />
          <p>{errors.email}</p>
          <p>{emailNotFoundErr && emailNotFoundErr}</p>
        </div>
        <div>
          <label className="form-label" htmlFor="">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Login;
