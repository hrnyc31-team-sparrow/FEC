import { combineReducers } from 'redux'
import currProduct from './currProd.js'
import reviewMetaData from './reviewMetaData.js'
import favorites from './favorites.js'

const rootReducer = combineReducers({
  currProduct,
  favorites,
  reviewMetaData
})

export default rootReducer;