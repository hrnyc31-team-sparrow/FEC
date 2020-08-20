import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";
import ReviewsFeed from "./ReviewsFeed";
import apiMaster from "../../apiMaster.js";
import { useSelector } from 'react-redux';
// import reviewsListData from '../../../../mockData/reviewsListData'

const RatingsAndReviews = ({ productInfoData, reviewMetadata}) => {
  const [reviewsList, setReviewsList] = useState([]);
  const reviewMetadataRedux = useSelector(state => state.reviewMetadata);

  const {
    getReviewList,
    getReviewMetadata,
    updateReviewHelpfulness,
    reportReview,
  } = apiMaster;

  
  

  const updateReviewListState = (id, newCount, sortBy) => {
    return getReviewList(id, 1, newCount, sortBy)
      .then(({ data }) => {
        setReviewsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateReviewListState(1);
  }, []);

  const handleClickHelpful = (review_id, product_id, newCount, sortBy) => {
    return updateReviewHelpfulness(review_id)
      .then(() => {
        Promise.resolve(updateReviewListState(product_id, newCount, sortBy));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickReport = (review_id, product_id, newCount, sortBy) => {
    return reportReview(review_id)
      .then(() => {
        Promise.resolve(updateReviewListState(product_id, newCount, sortBy));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wrapper ratings-and-reviews-container">
      <div className="title">RATINGS & REVIEWS ReduxMeta: {reviewMetadataRedux.product_id}</div>
      <Ratings
        reviewMetadata={reviewMetadata}
        reviewsList={reviewsList}
        
      />
      <ReviewsFeed
        reviewMetadata={reviewMetadata}
        reviewsList={reviewsList}
        handleClickHelpful={handleClickHelpful}
        handleClickReport={handleClickReport}
        
        updateReviewListState={updateReviewListState}
        productInfoData={productInfoData}
      />
    </div>
  );
};

export default RatingsAndReviews;
