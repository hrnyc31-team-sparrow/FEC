import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "./StarRating";
import RatingBreakdown from "./RatingBreakdown";
const api = "http://18.224.200.47/";

const Rating = ({ reviewMetadata, reviewsList, totalReviews }) => {
  const ratings = reviewMetadata.ratings;
  const averageRating =
    (ratings[1] +
      ratings[2] * 2 +
      ratings[3] * 3 +
      ratings[4] * 4 +
      ratings[5] * 5) /
    totalReviews;
  const width = (averageRating / 5) * 100;

  return (
    <div className="ratings">
      <span className="average-rating">{averageRating}</span>
      <span className="vertical-align">
        <StarRating width={width} />
      </span>
      <br />
      <p className='text-style-1' >
        {Math.floor(
          (reviewMetadata.recommended[1] /
            (reviewMetadata.recommended[0] + reviewMetadata.recommended[1])) *
            100
        )}
        % of reviews recommend this product
      </p>
      <RatingBreakdown
        reviewMetadata={reviewMetadata}
        totalReviews={totalReviews}
        reviewsList={reviewsList}
      />
    </div>
  );
};

export default Rating;
