import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message.js';
import { addToCart } from '../actions/cartActions.js';

const CartScreen = () => {
  const { id } = useParams();
  const productId = id;
  const location = useLocation();

  const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return <div>Cart</div>;
};

export default CartScreen;
