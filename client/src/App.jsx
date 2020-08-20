import React, { useState, useEffect } from "react";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews"
import productInfoData from "../../mockData/productInfoData.js"
import productsListData from "../../mockData/productsListData.js"
import productStylesData from "../../mockData/productStylesData.js"
import reviewMetadataData from "../../mockData/reviewMetadataData.js"
import reviewsListData from "../../mockData/reviewsListData.js"
import Overview from "./components/overview/Overview";
import team_sparrow from "../dist/lib/team_sparrow.png";
import { useDispatch, useSelector } from 'react-redux';
import { handleProductUpdate, handleProductListUpdate, handleReviewMetadataUpdate } from "./actions";


const App = () => {
  const productInfo = useSelector(state => state.productInfo);
  const productsList = useSelector(state => state.productsList);
  // const reviewMetadata = useSelector(state => state.reviewMetadata);
  const [productStyles, setProductStyles] = useState(productStylesData);
  const [reviewMetadata1, setReviewMetadata1] = useState(reviewMetadataData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleProductUpdate());
    dispatch(handleProductListUpdate());
    dispatch(handleReviewMetadataUpdate());
  }, []);

  return (
    <>
      <div className="header">
         TEAM <span><img className='sparrow' src={team_sparrow}></img></span> SPARROW
      </div>
      <Overview productStyles={productStyles} />
      <RatingsAndReviews productInfoData={productInfoData} reviewMetadata={reviewMetadata1}/>
    </>
  );
};


export default App;