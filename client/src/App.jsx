import React, { useState, useEffect } from "react";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews";
import productInfoData from "../../mockData/productInfoData.js";
import Overview from "./components/overview/Overview";
import { useDispatch, useSelector } from 'react-redux';
import { handleProductUpdate, handleReviewMetadataUpdate, handleProductStylesUpdate } from "./actions";

const App = () => {
  const productId = useSelector(state => state.productId);
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleInput = () => {
    setUserInput('');
  };

  useEffect(() => {
    dispatch(handleProductUpdate(productId));
    dispatch(handleProductStylesUpdate(productId));
    dispatch(handleReviewMetadataUpdate(productId));
  }, [productId]);


  return (
    <>
      <div className="banner">
        <div className="header">
            CRISP
        </div>
        <div className="sub-header">Apparel</div>
        <div className="search">
          <input className="search-input" type='text' placeholder="Search..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={
            (e) => {
              e.key === 'Enter' ? handleInput() : null;
            }
          }></input>
          <img src="./images/magnifying-glass-black.png" onClick={handleInput}/>
        </div>
        
      </div>
      <Overview />
      <RatingsAndReviews productInfoData={productInfoData} />
    </>
  );
};


export default App;