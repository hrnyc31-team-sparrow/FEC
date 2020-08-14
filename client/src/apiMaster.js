import axios from 'axios';
const url = 'http://18.224.200.47';


const getProductList = () => {
  return axios.get(`${url}/products/list`);
};

const getProduct = (product_id = 1) => {
  return axios.get(`${url}/products/${product_id}`)
}

const getProductStyle = (product_id = 1) => {
  return axios.get(`${url}/products/${product_id}/styles`)
}

const getRelatedProducts = (product_id = 1) => {
  return axios.get(`${url}/products/${product_id}/related`)
}

const getReviewList = (product_id = 1, page = 1, count = 2, sort = 'relevant') => {
  return axios.get(`${url}/reviews/${product_id}/list`, {params: {
    page, count, sort
  }})
}

const getReviewMetadata = (product_id = 1) => {
  return axios.get(`${url}/reviews/${product_id}/meta`)
}

const addReview = (product_id = 1) => {
  return axios.post(`${url}/reviews/${product_id}`)
}

const updateReviewHelpfulness = (review_id) => {
  return axios.put(`${url}/reviews/helpful/${review_id}`)
}

const reportReview = (review_id) => {
  return axios.put(`${url}/reviews/report/${review_id}`)
}

const apiMaster = {
getProductList,
getProduct,
getProductStyle,
getRelatedProducts,
getReviewList,
getReviewMetadata,
addReview,
updateReviewHelpfulness,
reportReview,
 }
// const getCart = () => {
//   return axios.get(`${url}/cart`)
// }

// const addToCard = (sku_id) => {
//   return axios.post('')
// }
export default apiMaster;

