const reviewMetaDataReducer = (state = null , action) => {
  switch (action.type) {
    case 'UPDATE_META_DATA':
      return action.reviewMetaData
    default:
      return state;
  }
};

export default reviewMetaDataReducer;