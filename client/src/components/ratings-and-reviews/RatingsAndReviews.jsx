import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";
import ReviewsFeed from "./ReviewsFeed";
import {
  getReviewList,
  getReviewMetadata,
  updateReviewHelpfulness,
  reportReview,
} from "../../apiMaster.js";
//import { useSelector } from "react-redux";

const RatingsAndReviews = ({ productInfoData, reviewMetadata }) => {
  const [reviewsList, setReviewsList] = useState([]);
  const [currentSort, setCurrentSort] = useState("relevant");
  const [currentIndex, setCurrentIndex] = useState(1);
  // const reviewMetadata = useSelector((state) => state.reviewMetadata);

  const ratings = reviewMetadata.ratings;
  const totalReviews =
    ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];

  useEffect(() => {
    updateReviewListState(productInfoData.product_id, totalReviews);
  }, []);

  const updateReviewListState = (id, newCount, sortBy) => {
    return getReviewList(id, newCount, sortBy)
      .then(({ data }) => {
        setReviewsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <div className="title">RATINGS & REVIEWS</div>
      <Ratings
        reviewMetadata={reviewMetadata}
        reviewsList={reviewsList}
        totalReviews={totalReviews}
        setReviewsList={setReviewsList}
        updateReviewListState={updateReviewListState}
        productInfoData={productInfoData}
      />
      <ReviewsFeed
        reviewMetadata={reviewMetadata}
        reviewsList={reviewsList}
        handleClickHelpful={handleClickHelpful}
        handleClickReport={handleClickReport}
        totalReviews={totalReviews}
        updateReviewListState={updateReviewListState}
        productInfoData={productInfoData}
        currentIndex={currentIndex}
        currentSort={currentSort}
        setCurrentIndex={setCurrentIndex}
        setCurrentSort={setCurrentSort}
      />
    </div>
  );
};

export default RatingsAndReviews;
