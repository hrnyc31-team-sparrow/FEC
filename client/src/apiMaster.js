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


// const getCart = () => {
//   return axios.get(`${url}/cart`)
// }

// const addToCard = (sku_id) => {
//   return axios.post('')
// }
export default apiMaster;

