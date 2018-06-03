import React from 'react';
import PropTypes from 'prop-types';
import cartStyle from "./CartStyle";

const CartFooter = ({totalAmount}) => (
  <p style={cartStyle.total_amount}>Total amount: {totalAmount.toFixed(2)} USD</p>
);

CartFooter.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};
export default CartFooter;
