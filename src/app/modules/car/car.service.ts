import { Car } from './car.interface';
import { CarModel } from './car.model';

const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car);
  return result;
};

const getAllCarFromDB = async () => {
  const result = await CarModel.find();
  return result;
};

const getSingleCarFromDB = async (_id: string) => {
  const result = await CarModel.findOne({ _id });
  return result;
};

const updateSingleCarFromDB = async (
  _id: string,
  updatedData: Partial<Car>,
) => {
  const result = await CarModel.findByIdAndUpdate(_id, updatedData, {
    new: true,
  });
  return result;
};

const deleteSingleCarFromDB = async (_id: string) => {
  const result = await CarModel.deleteOne({ _id });
  return result;
};

export const CarServices = {
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
  deleteSingleCarFromDB,
  updateSingleCarFromDB,
};
