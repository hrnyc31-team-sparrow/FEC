// state:
// {
//   currProduct: {} 
//   sessionToken:
//   favorites: []  
//   reviewMetaData: {} //
// }

//after clicking on another product, update the main product
export const updateCurrProduct = (newCurrProduct) => ({
  type: 'UPDATE_CURRENT_PRODUCT',
  currProduct: newCurrProduct
});

//after adding or deleting a favorite, get newFavorites
export const updateFavorites = (newFavorites) => ({
  type: 'UPDATE_FAVORITES',
  favorites: newFavorites
})

//updating the state of the metaData according to the current product
export const updateMetaData = (newMetaData) => ({
  type: 'UPDATE_META_DATA',
  reviewMetaData: newMetaData
})
