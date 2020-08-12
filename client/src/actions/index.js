import apiMaster from '../apiMaster.js'

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


export const handleProductUpdate = (product_id) => {
  console.log('inside handleProduct update')
  return (dispatch) => {
    getProduct(product_id)
    .then((currProduct) => {
      console.log(currProduct)
      return dispatch(updateCurrProduct(currProduct))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export default {handleProductUpdate, updateMetaData, updateFavorites, updateCurrProduct}