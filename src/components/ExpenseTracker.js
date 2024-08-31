// src/components/ExpenseTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await axios.get('/mock/expenses.json');
      // await axios.get('/api/expenses');
      setExpenses(response.data);
    };
    fetchExpenses();
  }, []);

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            <p>Expense: {expense.description}</p>
            <p>Amount: ${expense.amount}</p>
            <p>Date: {expense.date}</p>
          </li>
        ))}
      </ul>
      <h2>Total Expense: ${totalExpense}</h2>
    </div>
  );
};

export default ExpenseTracker;
