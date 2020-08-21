import reviewMetadataData from "../../../mockData/reviewMetadataData"

const reviewMetadataReducer = (state = {reviewMetadataData }, action) => {
  switch (action.type) {
    case "UPDATE_META_DATA":
      return action.reviewMetadata;
    default:
      return state;
  }
};

export default reviewMetadataReducer;
