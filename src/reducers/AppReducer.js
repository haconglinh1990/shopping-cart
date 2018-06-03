import {
  ADD_PRODUCT_TO_CART,
  MINUS_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART
} from "../actions/ActionTypes";

import productMockData from '../helper/MockData.json';

const initialState = {
  products: productMockData
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: state.products
          .map((product) => {
            if(product.id === action.productId){
              return {
                ...product,
                quantity: product.quantity ? product.quantity + 1 : 1
              };
            }
            return product;
          })
      };

    case MINUS_PRODUCT_FROM_CART:
      return {
        ...state,
        products: state.products
          .map((product) => {
            if(product.id === action.productId){
              return {
                ...product,
                quantity: product.quantity >= 1 ? product.quantity - 1 : 0
              };
            }
            return product;
          })
      };

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: state.products
          .map((product) => {
            if(product.id === action.productId){
              return { ...product, quantity: 0 };
            }
            return product;
          })
      };

    default:
      return state;
  }
};

export default appReducer;
