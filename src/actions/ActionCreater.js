import {
  ADD_PRODUCT_TO_CART,
  MINUS_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART
} from "./ActionTypes";

export const addProductToCart = productId => ({
  type: ADD_PRODUCT_TO_CART,
  productId
});

export const minusProductFromCart = productId => ({
  type: MINUS_PRODUCT_FROM_CART,
  productId
});

export const removeProductFromCart = productId => ({
  type: REMOVE_PRODUCT_FROM_CART,
  productId
});

