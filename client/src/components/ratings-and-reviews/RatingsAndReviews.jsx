import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";
import ReviewsFeed from "./ReviewsFeed";
import reviewMetadataData from "../../../../mockData/reviewMetadataData";
import reviewsListData from "../../../../mockData/reviewsListData";
import {
  getReviewList,
  getReviewMetadata,
  updateReviewHelpfulness,
  reportReview,
} from "../../apiMaster.js";
import { handleReviewMetadataUpdate } from "../../actions";

const RatingsAndReviews = ({ productInfoData }) => {
  const [reviewsList, setReviewsList] = useState([]);
  const [currentSort, setCurrentSort] = useState("relevant");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [reviewMetadata, setReviewMetadata] = useState(reviewMetadataData);

  useEffect(() => {
    updateReviewMetadataState(productInfoData.id);
  }, []);
  const totalReviews=
          (reviewMetadata.ratings[1] || 0) +
          (reviewMetadata.ratings[2] || 0) +
          (reviewMetadata.ratings[3] || 0) +
          (reviewMetadata.ratings[4] || 0) +
          (reviewMetadata.ratings[5] || 0);


  console.log("totalReviews: ", totalReviews);

  const updateReviewMetadataState = (id = 2) => {
    return getReviewMetadata(id)
      .then(({ data }) => {
        setReviewMetadata(data);
      })
      .then(() => {
        updateReviewListState(productInfoData.id, totalReviews, currentSort);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateReviewListState = (id = 2, newCount, sortBy) => {
    return getReviewList(id, newCount, sortBy)
      .then(({ data }) => {
        setReviewsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickHelpful = (review_id, product_id = 2, newCount, sortBy) => {
    return updateReviewHelpfulness(review_id)
      .then(() => {
        Promise.resolve(
          updateReviewListState((product_id = 2), newCount, sortBy)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickReport = (review_id, product_id = 2, newCount, sortBy) => {
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
        updateReviewMetadataState={updateReviewMetadataState}
      />
    </div>
  );
};

export default RatingsAndReviews;
