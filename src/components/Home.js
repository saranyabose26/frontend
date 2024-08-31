import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        position: 'fixed',
        inset: 0,
        width: 'fit-content',
        height: 'fit-content',
        margin: 'auto',
      }}
    >
      <h1>Welcome to Vehicle Care Platform</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <button onClick={() => navigate(`/service-list`)}>Service List</button>
        <button onClick={() => navigate(`/history`)}>Service History</button>
        <button onClick={() => navigate(`/upcoming`)}>
          Upcoming Appointments
        </button>
        <button onClick={() => navigate(`/reviews`)}>Reviews</button>
        <button onClick={() => navigate(`/expenses`)}>Expense Tracker</button>
      </div>
    </div>
  );
};

export default Home;
