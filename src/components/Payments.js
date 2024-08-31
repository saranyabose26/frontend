// src/components/Payment.js
import React from 'react';
import axios from 'axios';

const Payment = ({ amount }) => {
  const handlePayment = async () => {
    const { data: order } = await axios.post('/api/payment/order', { amount });

    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: order.amount,
      currency: 'INR',
      name: 'Vehicle Care Platform',
      description: 'Test Transaction',
      order_id: order.id,
      handler: async function (response) {
        const data = {
          order_id: order.id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        };

        const result = await axios.post('/api/payment/verify', data);
        alert(result.data.message);
      },
      prefill: {
        name: 'User Name',
        email: 'user@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Vehicle Care Service Center',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default Payment;
