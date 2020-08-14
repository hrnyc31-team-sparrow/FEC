import React, { useState, useEffect } from "react";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews"
import productInfoData from "../../mockData/productInfoData.js"
import productsListData from "../../mockData/productsListData.js"
import productStylesData from "../../mockData/productStylesData.js"
import reviewMetadataData from "../../mockData/reviewMetadataData.js"
import reviewsListData from "../../mockData/reviewsListData.js"
import Overview from "./components/overview/Overview";


const App = () => {
  const [productInfo, setProductInfo] = useState(productInfoData);
  const [productsList, setProductsList] = useState(productsListData);
  const [productStyles, setProductStyles] = useState(productStylesData);
  const [reviewMetadata, setReviewMetadata] = useState(reviewMetadataData);
  const [reviewsList, setReviewsList] = useState(reviewsListData);

  return (
    <>
      <h1>
        Hello
      </h1>
      <Overview productStyles={productStyles} />
      <RatingsAndReviews reviewMetadata={reviewMetadata} reviewsList={reviewsList}/>
    </>
  );
};


export default App;