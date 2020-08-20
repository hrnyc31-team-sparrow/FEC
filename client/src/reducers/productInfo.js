import Redux from 'redux';

const productInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_INFO':
      return action.productInfo;
    default:
      return state;
  }
};

export default productInfoReducer;