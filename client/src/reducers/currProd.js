
const currProdReducer = (state = null , action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_PRODUCT':
      return action.currProduct
    default:
      return state;
  }
};

export default currProdReducer;