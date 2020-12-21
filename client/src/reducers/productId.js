const productIdReducer = (state = 3, action) => {
  switch (action.type) {
  case 'UPDATE_PRODUCT_ID':
    return action.productId;
  default:
    return state;
  }
};
  
export default productIdReducer;