import React, { useState, useEffect } from "react";
import apiMaster from "../../apiMaster.js";

const RatingBreakdown = ({ reviewMetadata, reviewsList }) => {
  const handleClickStarCount = () => {};

  return (
    <div className="breakdown-container">

      <div
        className="star-count clickable margin-sides text-style-2 for5"
        onClick={handleClickStarCount}
      >
        5 stars
      </div>
      <div className="bar-container">
        <div
          className="for5 bar"
          style={{
            width: (reviewMetadata.ratings[5] / reviewMetadata.ratings['1'] + reviewMetadata.ratings['2'] + reviewMetadata.ratings['3'] + reviewMetadata.ratings['4'] + reviewMetadata.ratings['5']) * 100 + "%",
          }}
        ></div>
      </div>
      <div className="ratingCount text-style-2 for5">
        {reviewMetadata.ratings[5]}
      </div>

      <div
        className="clickable margin-sides text-style-2 star-count for4"
        onClick={handleClickStarCount}
      >
        4 stars
      </div>
      <div className="bar-container">
        <div
          className="bar for4"
          style={{
            width: (reviewMetadata.ratings[4] / reviewMetadata.ratings['1'] + reviewMetadata.ratings['2'] + reviewMetadata.ratings['3'] + reviewMetadata.ratings['4'] + reviewMetadata.ratings['5']) * 100 + "%",
          }}
        ></div>
      </div>
      <div className="ratingCount text-style-2 for4">
        {reviewMetadata.ratings[4]}
      </div>

      <div
        className="clickable margin-sides text-style-2 for3 star-count"
        onClick={handleClickStarCount}
      >
        3 stars
      </div>
      <div className="bar-container">
        <div
          className="bar for3"
          style={{
            width: (reviewMetadata.ratings[3] / (reviewMetadata.ratings['1'] + reviewMetadata.ratings['2'] + reviewMetadata.ratings['3'] + reviewMetadata.ratings['4'] + reviewMetadata.ratings['5'])) * 100 + "%"
          }}
        ></div>
      </div>
      <div className="ratingCount text-style-2 for3">
        {reviewMetadata.ratings[3]}
      </div>

      <div
        className="star-count clickable margin-sides text-style-2 for2"
        onClick={handleClickStarCount}
      >
        2 stars
      </div>
      <div className="bar-container">
        <div
          className="bar for2"
          style={{
            width: (reviewMetadata.ratings[2] / (reviewMetadata.ratings['1'] + reviewMetadata.ratings['2'] + reviewMetadata.ratings['3'] + reviewMetadata.ratings['4'] + reviewMetadata.ratings['5'])) * 100 + "%",
          }}
        ></div>
      </div>
      <div className="ratingCount text-style-2 for2">
        {reviewMetadata.ratings[2]}
      </div>

      <div
        className="star-count clickable margin-sides text-style-2 for1"
        onClick={handleClickStarCount}
      >
        1 stars
      </div>

      <div className="bar-container">
        <div
          className="bar for1"
          style={{
            width: (reviewMetadata.ratings[1] / reviewMetadata.ratings['1'] + reviewMetadata.ratings['2'] + reviewMetadata.ratings['3'] + reviewMetadata.ratings['4'] + reviewMetadata.ratings['5']) * 100 + "%",
          }}
        ></div>
      </div>
      <div className="ratingCount text-style-2 for1">
        {reviewMetadata.ratings[1]}
      </div>
    </div>
  );
};

export default RatingBreakdown;
