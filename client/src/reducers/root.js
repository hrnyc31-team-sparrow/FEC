import { combineReducers } from 'redux';
import reviewMetadata from './reviewMetaData.js';
import productInfo from './productInfo.js';

const rootReducer = combineReducers({
  productInfo,
  reviewMetadata
});

export default rootReducer;