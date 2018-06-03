const productItemStyle = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid green',
    padding: '2%'
  },
  item_container: {
    flex: 1,
    border: '1px solid black',
    margin: '2%',
    padding: '2%',
  },
  button_container: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 10,
    height: 27,
    width: '80%'
  },
  img: {
    width: '100%'
  },
  title: {
    height: 50,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'blue'
  },
  price: {
    color: 'black',
    fontWeight: 600
  }

};

export default productItemStyle;
