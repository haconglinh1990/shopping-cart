import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProductToCart } from '../actions/ActionCreater';
import ProductItem from '../components/ProductItem/ProductItem';
import {getProducts} from "../helper/Selectors";
import productStyle from "../components/ProductItem/ProductItemStyle";

const ProductsContainer = ({ products, addProduct }) => (
  <div style={productStyle.container} >
    {products.map(product =>
      (<ProductItem
        key={product.id}
        product={product}
        addProductToCart={() => addProduct(product.id)}
      />))}
  </div>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired,
  addProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getProducts(state)
});

export default connect(
  mapStateToProps,
  { addProduct: addProductToCart }
)(ProductsContainer);
