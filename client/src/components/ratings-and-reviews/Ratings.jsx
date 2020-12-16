import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import RatingBreakdown from "./RatingBreakdown";


const Rating = ({
  reviewMetadata,
  reviewsList,
  totalReviews,
  setReviewsList,
  updateReviewListState,
  productInfoData,
}) => {

const ratings = reviewMetadata.ratings;
  const averageRating =
    (ratings[1] +
      ratings[2] * 2 +
      ratings[3] * 3 +
      ratings[4] * 4 +
      ratings[5] * 5) /
    totalReviews;
  const width = (averageRating / 5) * 100;
console.log(reviewMetadata)
  return (
    <div className="ratings">
      <span className="average-rating">{(averageRating).toFixed(2)}</span>
      <span className="vertical-align">
        <StarRating width={width} />
      </span>
      <br />
      <p className="text-style-1">
        {reviewMetadata.recommended !== undefined ? (
          Math.floor(
            (reviewMetadata.recommended[1] /
              (reviewMetadata.recommended[0] + reviewMetadata.recommended[1])) *
              100
          )
        ) : (
          <></>
        )}
        % of reviews recommend this product
      </p>
      <RatingBreakdown
        reviewMetadata={reviewMetadata}
        totalReviews={totalReviews}
        reviewsList={reviewsList}
        setReviewsList={setReviewsList}
        updateReviewListState={updateReviewListState}
        productInfoData={productInfoData}
      />
      <br />
    </div>
  );
};

export default Rating;
