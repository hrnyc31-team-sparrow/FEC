const reviewMetadataReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_META_DATA":
      return action.reviewMetadata;
    default:
      return state;
  }
};

export default reviewMetadataReducer;
