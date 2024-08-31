// src/components/AppointmentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const [serviceId, setServiceId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = { serviceId, date, time, notes };
    try {
      await axios.post('/api/appointments', appointmentData);
      alert('Appointment scheduled successfully');
      navigate('/appointments');
    } catch (error) {
      console.error('Error scheduling appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Schedule Appointment</h1>
      <div>
        <label>Service</label>
        <select onChange={(e) => setServiceId(e.target.value)} required>
          {/* Map through services fetched from backend */}
          <option value=''>Select a service</option>
          <option value='1'>Oil Change</option>
          <option value='2'>Tire Rotation</option>
          {/* More options */}
        </select>
      </div>
      <div>
        <label>Date</label>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time</label>
        <input
          type='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <button type='submit'>Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
