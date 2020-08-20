import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "./StarRating";
import RatingBreakdown from "./RatingBreakdown";
const api = "http://18.224.200.47/";

const Rating = ({ reviewMetadata, reviewsList, }) => {
 const displayAverageRating = () => {
   return
     (reviewMetadata.ratings[1] +
       reviewMetadata.ratings[2] * 2 +
       reviewMetadata. ratings[3] * 3 +
       reviewMetadata.ratings[4] * 4 +
       reviewMetadata.ratings[5] * 5) /
       reviewMetadata.ratings['1'] + reviewMetadata.ratings['2'] + reviewMetadata.ratings['3'] + reviewMetadata.ratings['4'] + reviewMetadata.ratings['5'];
 }
  //const width = (averageRating / 5) * 100;

  return (
    <div className="ratings">
      <span className="average-rating">{displayAverageRating()}</span>
      <span className="vertical-align">
        <StarRating width={(displayAverageRating()/5)*100} />
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
        reviewsList={reviewsList}
      />
    </div>
  );
};

export default Rating;
