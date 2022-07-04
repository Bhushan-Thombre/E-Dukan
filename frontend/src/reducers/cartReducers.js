import {
  CART_ADD_ITEMS,
  CART_REMOVE_ITEMS,
} from '../constants/cartConstants.js';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    // First check if the product is already present in the cart or not.
    // If the product is already present in the cart then do not add the product again.
    // If the product does not exist then add all the items

    case CART_ADD_ITEMS:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};

export { cartReducer };
