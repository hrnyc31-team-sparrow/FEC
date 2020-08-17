import React, { useState, useEffect } from "react";
import apiMaster from "../../apiMaster.js";

const RatingBreakdown = ({ reviewMetadata, reviewsList, totalReviews }) => {
  const handleClickStarCount = () => {};

  return (
    <div className="breakdown-container">
      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          5 stars
        </div>
      </div>
      <div className="bar">
        <div className="bar-container">
          <div
            className="bar-5"
            style={{
              width: (reviewMetadata.ratings[5] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
      </div>

      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          4 stars
        </div>
      </div>
      <div className="bar">
        <div className="bar-container">
          <div
            className="bar-4"
            style={{
              width: (reviewMetadata.ratings[4] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
      </div>

      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          3 stars
        </div>
      </div>
      <div className="bar">
        <div className="bar-container">
          <div
            className="bar-3"
            style={{
              width: (reviewMetadata.ratings[3] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
      </div>

      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          2 stars
        </div>
      </div>

      <div className="bar">
        <div className="bar-container">
          <div
            className="bar-2"
            style={{
              width: (reviewMetadata.ratings[2] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
      </div>

      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          1 stars
        </div>
      </div>

      <div className="bar">
        <div className="bar-container">
          <div
            className="bar-1"
            style={{
              width: (reviewMetadata.ratings[1] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RatingBreakdown;
