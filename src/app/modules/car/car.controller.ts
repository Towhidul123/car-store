import { Request, Response } from 'express';
import { CarServices } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const car = req.body;

    const result = await CarServices.createCarIntoDB(car);

    // send response

    res.status(200).json({
      success: true,
      message: 'Car created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getALLCar = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarFromDB();
    res.status(200).json({
      success: true,
      message: 'Car retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarServices.getSingleCarFromDB(carId);

    if (!result) {
      return res.status(404).json({ success: false, message: 'Car not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Single Car retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const updatedData = req.body;

    const result = await CarServices.updateSingleCarFromDB(carId, updatedData);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarServices.deleteSingleCarFromDB(carId);
    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, message: 'Car not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Car deleted successfully',
      data: {},
    });
  } catch (error) {
    console.log(error);
  }
};

export const CarController = {
  createCar,
  getALLCar,
  getSingleCar,
  deleteSingleCar,
  updateSingleCar,
};
