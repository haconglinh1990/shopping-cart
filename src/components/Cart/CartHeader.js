import React from 'react';
import PropTypes from 'prop-types';
import cartStyle from "./CartStyle";

const CartHeader = ({hasItem}) => (
  <div>
    {
      hasItem ?
        <div style={cartStyle.row}>
          <p style={cartStyle.item}>Item</p>
          <p style={cartStyle.price}>Price</p>
          <p style={cartStyle.price}>Quantity</p>
          <p style={cartStyle.price}>Total price</p>
        </div> :
        <div>
          <p style={cartStyle.message}>No Product in cart</p>
        </div>
    }

  </div>
);

CartHeader.propTypes = {
  hasItem: PropTypes.bool.isRequired,
};
export default CartHeader;
