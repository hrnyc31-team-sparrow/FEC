import {
  getProductInfo,
  getProductList,
  getReviewMetadata,
  getProductStyles
} from "../apiMaster.js";

// state:
// {
//   currProduct: {}
//   sessionToken:
//   favorites: []
//   reviewMetaData: {} //
// }

//after clicking on another product, update the main product
const updateProductInfo = (productInfo) => ({
  type: "UPDATE_PRODUCT_INFO",
  productInfo: productInfo,
});

export const handleProductUpdate = (product_id) => {
  return (dispatch) => {
    getProductInfo(product_id)
      .then(({ data }) => {
        console.log('updating product info ', data);
        dispatch(updateProductInfo(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateProductList = (productList) => ({
  type: "UPDATE_PRODUCT_LIST",
  productList: productList,
});

export const handleProductListUpdate = (product_id = 1) => {

  return (dispatch) => {
    getProductList(product_id)
      .then(({ data }) => {

        dispatch(updateProductList(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateProductStyles = (productStyles) => ({
  type: "UPDATE_PRODUCT_STYLES",
  productStyles: productStyles,
});

export const handleProductStylesUpdate = (product_id) => {
  return (dispatch) => {
    getProductStyles(product_id)
      .then(({data}) => {
        console.log('get product styles ', data.results);
        dispatch(updateProductStyles(data.results));
      })
      .catch(err => console.log(err));
  };
};

//after adding or deleting a favorite, get newFavorites
export const updateFavorites = (newFavorites) => ({
  type: "UPDATE_FAVORITES",
  favorites: newFavorites,
});

// //updating the state of the metaData according to the current product
export const updateReviewMetadata = (reviewMetadata) => ({
  type: "UPDATE_META_DATA",
  reviewMetadata: reviewMetadata,
});

export const handleReviewMetadataUpdate = (product_id) => {
  console.log("inside MetaData update");
  return (dispatch) => {
    getReviewMetadata(product_id)
      .then(({ data }) => {
        console.log("reviewMetadata ", data);
        dispatch(updateReviewMetadata(data));
      })
      .catch((err) => console.log(err));
  };
};




export default {
  handleProductUpdate,
  handleProductListUpdate,
  handleReviewMetadataUpdate,
  handleProductStylesUpdate,
};
// {handleProductUpdate, updateMetaData, updateFavorites, updateCurrProduct}
