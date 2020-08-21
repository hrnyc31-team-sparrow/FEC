import { combineReducers } from 'redux';
import reviewMetadata from './reviewMetaData.js';
import productInfo from './productInfo.js';
import productStyles from './productStyles.js';
import productId from './productId.js';


const rootReducer = combineReducers({
  productInfo,
  reviewMetadata,
  productStyles,
  productId
});

export default rootReducer;