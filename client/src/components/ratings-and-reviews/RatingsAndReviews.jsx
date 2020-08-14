import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";
import ReviewsFeed from "./ReviewsFeed";
import apiMaster from "../../apiMaster.js";


const RatingsAndReviews = ({ reviewMetadata }) => {
  const [reviewsList, setReviewsList] = useState({});
  const {
    getReviewList,
    getReviewMetadata,
    updateReviewHelpfulness,
    reportReview,
  } = apiMaster;

const ratings= reviewMetadata.ratings
const totalReviews= ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];


const updateReviewListState = (id , newCount, sortBy) => {
    return getReviewList(id, 1, newCount, sortBy)
      .then(( {data} ) => {
        setReviewsList(data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateReviewListState(1);
  }, []);

  const handleClickHelpful = (review_id, product_id, newCount) => {
    return updateReviewHelpfulness(review_id)
      .then(() => {
        Promise.resolve(updateReviewListState(product_id))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickReport = (review_id, product_id, newCount) => {
    return reportReview(review_id)
      .then(() => {
        Promise.resolve(updateReviewListState(product_id))
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className="wrapper ratings-and-reviews-container">
      <div className="title">RATINGS & REVIEWS</div>
      <Ratings reviewMetadata={reviewMetadata} reviewsList={reviewsList} totalReviews={totalReviews}/>
      <ReviewsFeed
        reviewMetadata={reviewMetadata}
        reviewsList={reviewsList}
        handleClickHelpful={handleClickHelpful}
        handleClickReport={handleClickReport}
        totalReviews={totalReviews}
        updateReviewListState={updateReviewListState}
      />
    </div>
  );
};

export default RatingsAndReviews;


