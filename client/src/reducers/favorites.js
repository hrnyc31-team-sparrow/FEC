import {UPDATE_FAVORITES} from '../actions/index'

const favoritesReducer = (state = null , action) => {
  switch (action.type) {
    case 'UPDATE_FAVORITES':
      return action.favorites
    default:
      return state;
  }
};

export default favoritesReducer;