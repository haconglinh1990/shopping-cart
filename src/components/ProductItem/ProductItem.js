import React from 'react';
import PropTypes from 'prop-types';
import productItemStyle from "./ProductItemStyle";

const ProductItem = ({ product, addProductToCart }) => (
  <div style={productItemStyle.item_container}>
    <div >
      <img style={productItemStyle.img} src={product.img} />
      <p style={productItemStyle.title}>{product.title}</p>
      <p style={productItemStyle.price}>{product.price} USD</p>
    </div>

    <div style={productItemStyle.button_container}>
      <button
        style={productItemStyle.button}
        onClick={addProductToCart}
      >
        {'Add to cart'}
      </button>
    </div>

  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired
};

export default ProductItem;
