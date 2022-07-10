import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc Create new Order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    paymentMethod,
    shippingAddress,
    itemsPrice,
    taxPrice,
    shippingPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order Items');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      itemsPrice,
      taxPrice,
      shippingPrice,
    });

    const createdOrder = await order.save();

    res.status(200).json(createdOrder);
  }
});

export { addOrderItems };
