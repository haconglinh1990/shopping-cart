const productRowStyle = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid black'
  },

  name: {
    flex: 2,
    paddingRight: '2%'
  },
  quantity_container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  quantity: {
    width: 22,
    textAlign: 'center',
    borderTop: '1px solid black',
    borderBottom: '1px solid black'
  },
  price: {
    flex: 1,
    textAlign: 'left'
  },
  button_minus: {
    width: 22,
    height: 22,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  button_plus: {
    width: 22,
    height: 22,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  total_container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },

  button_remove: {
    width: 22,
    height: 22,
    borderRadius: 10,
    paddingRight: 20
  },

};

export default productRowStyle;
