import React, { useState, useEffect } from "react";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews"
import productInfoData from "../../mockData/productInfoData.js"
import Overview from "./components/overview/Overview";
import team_sparrow from "../dist/lib/team_sparrow.png";
import { useDispatch, useSelector } from 'react-redux';
import { handleProductUpdate, handleReviewMetadataUpdate, handleProductStylesUpdate } from "./actions";


const App = () => {
  const productId = useSelector(state => state.productId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleProductUpdate(productId));
    dispatch(handleReviewMetadataUpdate(productId));
    dispatch(handleProductStylesUpdate(productId));
  }, [productId]);


  return (
    <>
      <div className="header">
         TEAM <span><img className='sparrow' src={team_sparrow}></img></span> SPARROW
      </div>
      <Overview />
      <RatingsAndReviews productInfoData={productInfoData} />
    </>
  );
};


export default App;