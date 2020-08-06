state:
{
  currProduct: {}
  sessionToken:
  favorites: []
  reviewMetaData: {}
}

export const changeCurrProduct = currProduct => ({
  type: 'CHANGE_CURRENT_PRODUCT',
  currProduct: currProduct
})
//after adding a new favorite, get newFavorites
export const updateFavorites = (newFavorites) => ({
  type: 'ADD_TO_FAVORITES',
  favorites: newFavorites
})

export const updateMetaData
