import React, { useState, useEffect } from "react";



const CharacteristicsBreakdown = ({ reviewMetadata, reviewsList, totalReviews,setReviewsList, updateReviewListState, productInfoData }) => {


  return (
    <div className="charbar-container">

          {/* <div
            className="bar"
            style={{
              width: (reviewMetadata.ratings[3] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
        <div className="ratingCount text-style-2 for3">
          {reviewMetadata.ratings[3]} */}
        </div>
  );
};

export default CharacteristicsBreakdown;
