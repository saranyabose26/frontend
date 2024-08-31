// src/components/ServiceList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      // Load mock data instead of making an API call
      const response = await axios.get('/mock/services.json');
      setOriginalData(response.data);
      setServices(response.data);
    };
    fetchServices();
  }, []);

  useEffect(() => {
    setPriceRange('');
    const fetchServices = async () => {
      let response = originalData.filter((item) => item.serviceId === category);

      //       await axios.get('/api/services', {
      //   params: {
      //     category,
      //     priceRange,
      //   },
      // });
      setServices(response);
    };
    fetchServices();
  }, [category]);

  useEffect(() => {
    setCategory('');
    const fetchServices = async () => {
      let response = [];

      console.log(priceRange);

      if (priceRange === 'low') {
        response = originalData.filter((item) => item.price <= 30);
      } else if (priceRange === 'medium') {
        response = originalData.filter(
          (item) => item.price > 30 && item.price <= 40
        );
      } else if (priceRange === 'high') {
        response = originalData.filter((item) => item.price > 40);
      } else {
        response = originalData;
      }

      //       await axios.get('/api/services', {
      //   params: {
      //     category,
      //     priceRange,
      //   },
      // });
      setServices(response);
    };
    fetchServices();
  }, [priceRange]);

  return (
    <div>
      <h1>Our Services</h1>
      <div>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=''>All</option>
            <option value='oil_change'>Oil Change</option>
            <option value='tire_rotation'>Tire Rotation</option>
            <option value='break'>Break</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <label>
          Price Range:
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value=''>All</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </label>
      </div>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>Category: {service.category}</p>
            <p>Price: ${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
