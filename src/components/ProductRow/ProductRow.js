import React from 'react';
import PropTypes from 'prop-types';
import productRowStyle from "./ProductRowStyle";
import removeIcon from '../../assets/img/remove.jpg';

const ProductRow = ({
  name, price, quantity, total,
  addProductToCart,
  removeProductFromCart,
  minusProductFromCart
}) => (
  <div style={productRowStyle.row}>
    <p style={productRowStyle.name}>{name}</p>
    <p style={productRowStyle.price}>{price} USD</p>
    <div style={productRowStyle.quantity_container}>
      <button
        style={productRowStyle.button_minus}
        onClick={removeProductFromCart}
      >
          -
      </button>
      <p style={productRowStyle.quantity}>{quantity}</p>
      <button
        style={productRowStyle.button_plus}
        onClick={addProductToCart}
      >
          +
      </button>
    </div>

    <div style={productRowStyle.total_container}>
      <p style={productRowStyle.price}>{total.toFixed(2)} USD</p>
      <img src={removeIcon} style={productRowStyle.button_remove} onClick={minusProductFromCart} />
    </div>
  </div>
);

ProductRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  minusProductFromCart: PropTypes.func.isRequired
};

export default ProductRow;
