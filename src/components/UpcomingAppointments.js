// src/components/UpcomingAppointments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await axios.get('/mock/appointments.json');
      // await axios.get('/api/appointments/upcoming');
      setAppointments(response.data);
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h1>Upcoming Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <p>Service: {appointment.serviceName}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Notes: {appointment.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAppointments;
