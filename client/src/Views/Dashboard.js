import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };},[]);

  const navigate = useNavigate();

  // DELETE FROM DOM

  // LOGOUT
  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
      <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Dashboard;
