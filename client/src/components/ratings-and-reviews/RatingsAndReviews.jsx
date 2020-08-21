import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";
import ReviewsFeed from "./ReviewsFeed";
import reviewMetadataData from "../../../../mockData/reviewMetadataData"
import { useDispatch, useSelector } from 'react-redux';
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
  // const reviewMetadata = useSelector(state => state.reviewMetadata);
  const dispatch = useDispatch();


  const totalReviews =
        reviewMetadata.ratings[1] +
        reviewMetadata.ratings[2] +
        reviewMetadata.ratings[3] +
        reviewMetadata.ratings[4] +
        reviewMetadata.ratings[5]


  useEffect(() => {
    updateReviewListState(productInfoData.id, totalReviews);
    updateReviewMetadataState(productInfoData.id);
  }, []);

  // useEffect(() => {
  //   setReviewsList(productInfoData.id, totalReviews);
  // }, [reviewsList]);

  const updateReviewMetadataState = (id = 1) => {
    return getReviewMetadata(id)
      .then(({ data }) => {
        setReviewMetadata(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateReviewListState = (id = 1, newCount, sortBy) => {
    return getReviewList(id, newCount, sortBy)
      .then(({ data }) => {
        setReviewsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickHelpful = (review_id, product_id = 1, newCount, sortBy) => {
    return updateReviewHelpfulness(review_id)
      .then(() => {
        Promise.resolve(updateReviewListState(product_id = 1, newCount, sortBy));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickReport = (review_id, product_id = 1, newCount, sortBy) => {
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
