import { Schema, model, connect } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>(
  {
    email: { type: String, required: true },
    car: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const OrderModel = model<Order>('Order', orderSchema);
