import axios from "axios";
const url = "http://18.224.200.47";

export const getProductList = () => {
  return axios.get(`${url}/products/list`);
};

export const getProductInfo = (product_id = 1) => {
  return axios.get(`${url}/products/${product_id}`);
};

export const getProductStyle = (product_id = 1) => {
  return axios.get(`${url}/products/${product_id}/styles`);
};

export const getRelatedProducts = (product_id = 1) => {
  return axios.get(`${url}/products/${product_id}/related`);
};

export const getReviewList = (product_id = 1, count, sort = "relevant") => {
  return axios.get(`${url}/reviews/${product_id}/list`, {
    params: {
      count,
      sort,
    },
  });
};

export const getReviewMetadata = (product_id = 1) => {
  return axios.get(`${url}/reviews/${product_id}/meta`);
};

export const addReview = ({
  product_id = 1,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos,
  characteristics,
}) => {
  console.log(
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics
  );
  return axios.post(`${url}/reviews/${product_id}`, {
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  });
};

export const updateReviewHelpfulness = (review_id) => {
  return axios.put(`${url}/reviews/helpful/${review_id}`);
};

export const reportReview = (review_id) => {
  return axios.put(`${url}/reviews/report/${review_id}`);
};

// const getCart = () => {
//   return axios.get(`${url}/cart`)
// }

// const addToCard = (sku_id) => {
//   return axios.post('')
// }
export default {
  getProductInfo,
  getProductList,
  getProductStyle,
  getRelatedProducts,
  getReviewList,
  getReviewMetadata,
  addReview,
  updateReviewHelpfulness,
  reportReview,
};
