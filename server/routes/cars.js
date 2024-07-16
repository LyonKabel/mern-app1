const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.get('/cars', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

router.post('/cars', async (req, res) => {
  const newCar = new Car(req.body);
  await newCar.save();
  res.json(newCar);
});

router.put('/cars/:id', async (req, res) => {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCar);
});

router.delete('/cars/:id', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: 'Car deleted' });
});

module.exports = router;
