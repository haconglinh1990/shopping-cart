import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCartProducts, getTotalAmount} from '../helper/Selectors';
import {addProductToCart, minusProductFromCart, removeProductFromCart} from "../actions/ActionCreater";
import ProductRow from "../components/ProductRow/ProductRow";
import CartHeader from "../components/Cart/CartHeader";
import CartFooter from "../components/Cart/CartFooter";
import cartStyle from "../components/Cart/CartStyle";

const CartContainer = ({
  products, totalAmount,
  addProduct,
  minusProduct,
  removeProduct
}) => (
  <div style={cartStyle.container}>

    <CartHeader hasItem={totalAmount > 0} />

    {
      products.map(product =>
        (<ProductRow
          key={product.id}
          name={product.title}
          price={product.price}
          total={product.price * product.quantity}
          quantity={product.quantity}
          addProductToCart={() => addProduct(product.id)}
          removeProductFromCart={() => minusProduct(product.id)}
          minusProductFromCart={() => removeProduct(product.id)}
        />))

    }

    <CartFooter totalAmount={totalAmount} />

  </div>
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired,
  totalAmount: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  minusProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  totalAmount: getTotalAmount(state)
});

export default connect(mapStateToProps, {
  addProduct: addProductToCart,
  minusProduct: minusProductFromCart,
  removeProduct: removeProductFromCart
})(CartContainer);
