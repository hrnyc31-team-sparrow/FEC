import { combineReducers } from 'redux';
import reviewMetadata from './reviewMetaData.js';
import productInfo from './productInfo.js';
import productStyles from './productStyles.js';

const rootReducer = combineReducers({
  productInfo,
  reviewMetadata,
  productStyles
});

export default rootReducer;