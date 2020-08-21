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
import { handleProductUpdate, handleProductListUpdate, handleReviewMetadataUpdate, handleProductStylesUpdate } from "./actions";


const App = () => {
  const productInfo = useSelector(state => state.productInfo);
  const productsList = useSelector(state => state.productsList);
  // const reviewMetadata1 = useSelector(state => state.reviewMetadata);
  const [productStyles, setProductStyles] = useState([productStylesData]);
  //const [reviewMetadata, setReviewMetadata] = useState(reviewMetadataData);
  const [productId, setProductId] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleProductUpdate(1));
    dispatch(handleProductListUpdate(1));
    // dispatch(handleReviewMetadataUpdate(1));
    dispatch(handleProductStylesUpdate(1));
  }, []);


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