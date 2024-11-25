import { CarModel } from '../car/car.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const session = await OrderModel.startSession();
  session.startTransaction();

  try {
    const car = await CarModel.findById(order.car).session(session);

    if (!car) {
      throw new Error('Car not found');
    }

    if (car.quantity < order.quantity) {
      throw new Error('Not enough inventory to fulfill the order');
    }

    car.quantity -= order.quantity;

    if (car.quantity === 0) {
      car.inStock = false;
    }

    await car.save({ session });

    const result = await OrderModel.create([order], { session });

    await session.commitTransaction();
    session.endSession();

    return result[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const calculateRevenue = async () => {
  const revenueData = await OrderModel.aggregate([
    {
      $addFields: {
        carObjectId: { $toObjectId: '$car' },
      },
    },
    {
      $lookup: {
        from: 'cars',
        localField: 'carObjectId',
        foreignField: '_id',
        as: 'carDetails',
      },
    },

    {
      $unwind: '$carDetails',
    },
    {
      $project: {
        totalRevenue: {
          $multiply: ['$carDetails.price', '$quantity'],
        },
      },
    },

    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalRevenue' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return revenueData.length ? revenueData[0] : { totalRevenue: 0 };
};

export const OrderServices = {
  createOrderIntoDB,
  calculateRevenue,
};
