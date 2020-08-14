import React, { useState, useEffect } from "react";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews"
import productInfoData from "../../mockData/productInfoData.js"
import productsListData from "../../mockData/productsListData.js"
import productStylesData from "../../mockData/productStylesData.js"
import reviewMetadataData from "../../mockData/reviewMetadataData.js"
import reviewsListData from "../../mockData/reviewsListData.js"
import Overview from "./components/overview/Overview";
import team_sparrow from "../dist/lib/team_sparrow.png"


const App = () => {
  const [productInfo, setProductInfo] = useState(productInfoData);
  const [productsList, setProductsList] = useState(productsListData);
  const [productStyles, setProductStyles] = useState(productStylesData);
  const [reviewMetadata, setReviewMetadata] = useState(reviewMetadataData);


  return (
    <>
      <div className="header">
         TEAM <span><img className='sparrow' src={team_sparrow}></img></span> SPARROW
      </div>
      <Overview productStyles={productStyles} />
      <RatingsAndReviews reviewMetadata={reviewMetadata} />
    </>
  );
};


export default App;