import { combineReducers } from 'redux'
import currProdReducer from '.currProd'
import otherreducer from './somenotMadereducer'

export default combineReducers({
  currProdReducer,
})