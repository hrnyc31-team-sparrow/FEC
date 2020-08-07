import { combineReducers } from 'redux'
import currProd from './currProd.js'
import reviewMetaData from './metaData.js'
import favorites from './favorites.js'

export const rootReducer = combineReducers({
  currProduct,
  favorites,
  reviewMetaData
})