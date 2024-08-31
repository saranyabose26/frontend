// src/components/ReviewsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewsList = ({ serviceId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get('/mock/reviews.json');

      // await axios.get(`/api/services/${serviceId}/reviews`);
      setReviews(response.data);
    };
    fetchReviews();
  }, [serviceId]);

  return (
    <div>
      <h1>Customer Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>Rating: {review.rating} stars</p>
            <p>Comment: {review.comment}</p>
            <p>Date: {new Date(review.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
