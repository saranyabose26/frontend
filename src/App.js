import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import ServiceList from './components/ServiceList';
// import ServiceDetail from './components/ServiceDetail';

import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import ServiceHistory from './components/ServiceHistory';
import UpcomingAppointments from './components/UpcomingAppointments';
import ExpenseTracker from './components/ExpenseTracker';
import ReviewForm from './components/ReviewForm';
import ReviewsList from './components/ReviewsList';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service-list' element={<ServiceList />} />
        <Route path='/schedule' element={<AppointmentForm />} />
        <Route path='/history' element={<ServiceHistory />} />
        <Route path='/upcoming' element={<UpcomingAppointments />} />
        <Route path='/expenses' element={<ExpenseTracker />} />
        <Route path='/reviews' element={<ReviewsList />} />
        <Route path='/add-review' element={<ReviewForm />} />
        {/* <Route path='/register' element={<RegistrationForm />} />
        <Route path='/services' element={<ServiceList />} />
        <Route path='/services/:id' element={<ServiceDetail />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
