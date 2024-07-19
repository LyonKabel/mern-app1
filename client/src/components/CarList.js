import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get('/api/cars');
      setCars(response.data);
    };

    fetchCars();
  }, []);

  return (
    <ul>
      {cars.map(car => (
        <li key={car._id}>{car.make} {car.model} ({car.year})</li>
      ))}
    </ul>
  );
};

export default CarList;
