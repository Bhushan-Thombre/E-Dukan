import axios from 'axios';
import { CART_ADD_ITEMS } from '../constants/cartConstants.js';

const addToCart = (id, quantity) => async (dispatch, getState) => {
  const res = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEMS,
    payload: {
      product: res.data._id,
      name: res.data.name,
      image: res.data.image,
      price: res.data.price,
      countInStock: res.data.countInStock,
      quantity,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export { addToCart };
