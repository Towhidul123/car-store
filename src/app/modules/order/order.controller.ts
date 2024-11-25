import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await OrderServices.createOrderIntoDB(order);

    // send response

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.calculateRevenue();

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const OrderController = {
  createOrder,
  getRevenue,
};
