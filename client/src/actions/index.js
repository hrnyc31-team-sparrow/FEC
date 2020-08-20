import {
  getProductInfo,
  getProductList,
  getReviewMetadata,
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

export const updateProductList = (productList) => ({
  type: "UPDATE_PRODUCT_LIST",
  productList: productList,
});

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
export const handleProductUpdate = (product_id) => {
  console.log("inside handleProduct update");
  return (dispatch) => {
    getProductInfo(product_id)
      .then(({ data }) => {
        console.log("redux productInfo", data);
        dispatch(updateProductInfo(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const handleProductListUpdate = (product_id = 1) => {
  console.log("inside handleProductList update");
  return (dispatch) => {
    getProductList(product_id)
      .then(({ data }) => {
        console.log("redux productList", data);
        dispatch(updateProductList(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default {
  handleProductUpdate,
  handleProductListUpdate,
  handleReviewMetadataUpdate,
};
// {handleProductUpdate, updateMetaData, updateFavorites, updateCurrProduct}
