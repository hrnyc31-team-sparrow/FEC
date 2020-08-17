import React, { useState, useEffect } from "react";
import apiMaster from "../../apiMaster.js";

const RatingBreakdown = ({ reviewMetadata, reviewsList }) => {

  const handleClickStarCount = () => {

  }

  return (
    <div className="breakdown-container">
      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>5 stars</div>
      </div>
      <div className="bar">
        <div className="bar-container">
          <div className="bar-5"></div>
        </div>
      </div>

      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          4 stars
        </div>
      </div>
      <div className="bar">
        <div className="bar-container">
          <div className="bar-4"></div>
        </div>
      </div>

      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          3 stars
        </div>
      </div>
      <div className="bar">
        <div className="bar-container">
          <div className="bar-3"></div>
        </div>
      </div>

      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          2 stars
        </div>
      </div>

      <div className="bar">
        <div className="bar-container">
          <div className="bar-2"></div>
        </div>
      </div>

      <div className="star-count">
        <div className="clickable text-style-2" onClick={handleClickStarCount}>
          1 stars
        </div>
      </div>

      <div className="bar">
        <div className="bar-container">
          <div className="bar-1"></div>
        </div>
      </div>
    </div>
  );
};

export default RatingBreakdown;
