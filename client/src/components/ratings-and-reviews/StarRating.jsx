import React from "react";

const StarRating = ({ width }) => (
  <div className="star-rating">
    <div className="star-rating-upper" style={{ width: width + "%" }}>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
    <div className="star-rating-lower">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  </div>
);
export default StarRating;
