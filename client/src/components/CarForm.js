import React, { useState } from 'react';
import axios from 'axios';

const CarForm = () => {
  const [car, setCar] = useState({ make: '', model: '', year: '' });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/cars', car);
    setCar({ make: '', model: '', year: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="make" value={car.make} onChange={handleChange} placeholder="Make" required />
      <input name="model" value={car.model} onChange={handleChange} placeholder="Model" required />
      <input name="year" value={car.year} onChange={handleChange} placeholder="Year" required />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
