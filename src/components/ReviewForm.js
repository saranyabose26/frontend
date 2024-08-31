// src/components/ReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ serviceId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = { rating, comment };
    await axios.post(`/api/services/${serviceId}/reviews`, reviewData);
    alert('Review submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Rating</label>
        <select onChange={(e) => setRating(e.target.value)} required>
          <option value=''>Select rating</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <div>
        <label>Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>
      <button type='submit'>Submit Review</button>
    </form>
  );
};

export default ReviewForm;
