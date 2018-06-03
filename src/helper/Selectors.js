
export const getTotalAmount = state => state.products
  .filter(product => product.quantity && product.quantity >= 1)
  .reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

export const getCartProducts = state => state.products
  .filter(product => product.quantity && product.quantity >= 1);

export const getProducts = state => state.products;
