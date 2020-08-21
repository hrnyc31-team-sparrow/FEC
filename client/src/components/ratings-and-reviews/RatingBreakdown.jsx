import React, { useState, useEffect } from "react";
import apiMaster from "../../apiMaster.js";

const RatingBreakdown = ({
  reviewMetadata,
  reviewsList,
  totalReviews,
  setReviewsList,
  updateReviewListState,
  productInfoData,
}) => {
  const [filterStars, setFilterStars] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const handleClickRating = (num) => {
    let newFilterStars = Object.assign({}, filterStars);
    newFilterStars[num] = !newFilterStars[num];
    Promise.resolve(setFilterStars(newFilterStars))
      .then(() => {
        sortByStars(num, newFilterStars);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sortByStars = (num, obj) => {
    //filter only the reviews that matches the number
    const filtered = reviewsList.results.filter((e) => {
      return e.rating === num;
    });
    //making a copy of the reviewsList
    let filteredList = Object.assign({}, reviewsList);
    console.log(filtered);
    console.log(filteredList);

    const selectionCheck = Object.values(obj);
    let selectionQty = selectionCheck.filter((e) => e === true).length;
    console.log(selectionQty);
    console.log(selectionCheck);
    if (selectionQty === 1) {
      filteredList.results = filtered;
      setReviewsList(filteredList);
    } else if (selectionQty > 1) {
      filteredList.results = [...filteredList.results, ...filtered];
      console.log(filteredList.results);
      setReviewsList(filteredList);
    } else {
      updateReviewListState(productInfoData.product_id, totalReviews);
    }
  };
  const displayfilterRating = () => {
    let viewing = Object.values(filterStars);
    return viewing.map((e, i) => {
      if (e) {
        return (
          <div className="text-style-2 margin-sides">
            {i + 1} star ratings are shown in the reviews
          </div>
        );
      }
    });
  };

  const handleClickRemoveFilterRating = () => {
    setFilterStars({ 1: false, 2: false, 3: false, 4: false, 5: false });
    updateReviewListState(productInfoData.product_id, totalReviews);
  };

  const viewAllButtonDisplay = () => {
    let allTrue = Object.values(filterStars).filter((e) => e === true).length;
    if (allTrue === 5) {
      return (
        <button
          margin-sides
          text-style-2
          onClick={handleClickRemoveFilterRating}
        >
          View All
        </button>
      );
    }
  };
  return (
    <>
      <div className="breakdown-container">
        <div
          className="star-count clickable margin-sides text-style-2 for5"
          onClick={() => handleClickRating(5)}
        >
          5 stars
        </div>
        <div className="bar-container">
          <div
            className="for5 bar"
            style={{
              width: (reviewMetadata.ratings[5] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
        <div className="ratingCount text-style-2 for5">
          {reviewMetadata.ratings[5]}
        </div>

        <div
          className="clickable margin-sides text-style-2 star-count for4"
          onClick={() => handleClickRating(4)}
        >
          4 stars
        </div>
        <div className="bar-container">
          <div
            className="bar for4"
            style={{
              width: (reviewMetadata.ratings[4] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
        <div className="ratingCount text-style-2 for4">
          {reviewMetadata.ratings[4]}
        </div>

        <div
          className="clickable margin-sides text-style-2 for3 star-count"
          onClick={() => handleClickRating(3)}
        >
          3 stars
        </div>
        <div className="bar-container">
          <div
            className="bar for3"
            style={{
              width: (reviewMetadata.ratings[3] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
        <div className="ratingCount text-style-2 for3">
          {reviewMetadata.ratings[3]}
        </div>

        <div
          className="star-count clickable margin-sides text-style-2 for2"
          onClick={() => handleClickRating(2)}
        >
          2 stars
        </div>
        <div className="bar-container">
          <div
            className="bar for2"
            style={{
              width: (reviewMetadata.ratings[2] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
        <div className="ratingCount text-style-2 for2">
          {reviewMetadata.ratings[2]}
        </div>

        <div
          className="star-count clickable margin-sides text-style-2 for1"
          onClick={() => handleClickRating(1)}
        >
          1 stars
        </div>

        <div className="bar-container">
          <div
            className="bar for1"
            style={{
              width: (reviewMetadata.ratings[1] / totalReviews) * 100 + "%",
            }}
          ></div>
        </div>
        <div className="ratingCount text-style-2 for1">
          {reviewMetadata.ratings[1]}
        </div>
      </div>
      {displayfilterRating()}
      {viewAllButtonDisplay()}
    </>
  );
};

export default RatingBreakdown;
