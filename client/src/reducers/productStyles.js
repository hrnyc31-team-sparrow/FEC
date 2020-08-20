const productStylesReducer = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_PRODUCT_STYLES':
        return action.productStyles;
      default:
        return state;
    }
  };
  
export default productStylesReducer;