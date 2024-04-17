const express = require('express');
const router = express.Router();
const carcontroller=require('../controller/carContoller');
const motorcontroller=require('../controller/motorController');
router.get('/', carcontroller.getCarList);
router.get('/car/:id', carcontroller.getCarById);
router.post('/addCar', carcontroller.addCar);
router.put('/cars/', carcontroller.updateCar);
router.delete('/cars/:id', carcontroller.deleteCar);
router.get('/motor', motorcontroller.getMotorList);
router.get('/motor/:id', motorcontroller.getMotorById);
router.post('/addMotor', motorcontroller.addMotor);
router.put('/motor/', motorcontroller.updateMotor);
router.delete('/motor/:id', motorcontroller.deleteMotor);
module.exports = router;