// src/components/ServiceHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await axios.get('/mock/history.json');
      // await axios.get('/api/history');
      setHistory(response.data);
    };
    fetchHistory();
  }, []);

  return (
    <div>
      <h1>Service History</h1>
      <ul>
        {history.map((record) => (
          <li key={record._id}>
            <p>Service: {record.serviceName}</p>
            <p>Date: {record.date}</p>
            <p>Notes: {record.notes}</p>
            <p>Cost: ${record.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceHistory;
