import React from 'react';
import ProductsContainer from '../../containers/ProductsContainer';
import CartContainer from '../../containers/CartContainer';
import rootStyle from "./RootStyle";

const Root = () => (
  <div style={rootStyle.container}>
    <h2 style={rootStyle.title}>Shopping Cart Example</h2>
    <h3 style={rootStyle.brand}>Cart</h3>
    <CartContainer />
    <h3 style={rootStyle.brand}>Product</h3>
    <ProductsContainer />
  </div>
);

export default Root;
