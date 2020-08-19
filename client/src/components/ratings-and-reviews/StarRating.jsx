import React, { useState, useEffect } from "react";

const StarRating = ({
  width,
  currentModalView,
  handleChangeStarRatingSelect,
}) => {
  const [checkedOption, setCheckedOption] = useState("0");

  const handleChangeChecked = (event) => {
    return Promise.resolve(setCheckedOption(event.target.value))
      .then(handleChangeStarRatingSelect(event.target.value))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {currentModalView === "Add" ? (
        <div className="rating-group">
          <input
            disabled
            checked={checkedOption === "0"}
            className="rating__input rating__input--none"
            name="rating3"
            id="rating3-none"
            value="0"
            type="radio"
          />
          <label
            aria-label="1 star"
            className="rating__label"
            htmlFor="rating3-1"
          >
            <span className="rating__icon rating__icon--star">★</span>
          </label>
          <input
            className="rating__input"
            name="rating3"
            id="rating3-1"
            value="1"
            type="radio"
            onChange={handleChangeChecked}
            checked={checkedOption === "1"}
          />
          <label
            aria-label="2 stars"
            className="rating__label"
            htmlFor="rating3-2"
          >
            <span className="rating__icon rating__icon--star">★</span>
          </label>
          <input
            className="rating__input"
            name="rating3"
            id="rating3-2"
            value="2"
            type="radio"
            onChange={handleChangeChecked}
            checked={checkedOption === "2"}
          />
          <label
            aria-label="3 stars"
            className="rating__label"
            htmlFor="rating3-3"
          >
            <span className="rating__icon rating__icon--star">★</span>
          </label>
          <input
            className="rating__input"
            name="rating3"
            id="rating3-3"
            value="3"
            type="radio"
            onChange={handleChangeChecked}
            checked={checkedOption === "3"}
          />
          <label
            aria-label="4 stars"
            className="rating__label"
            htmlFor="rating3-4"
          >
            <span className="rating__icon rating__icon--star">★</span>
          </label>
          <input
            className="rating__input"
            checked={checkedOption === "4"}
            name="rating3"
            id="rating3-4"
            value="4"
            type="radio"
            onChange={handleChangeChecked}
          />
          <label
            aria-label="5 stars"
            className="rating__label"
            htmlFor="rating3-5"
          >
            <span className="rating__icon rating__icon--star">★</span>
          </label>
          <input
            className="rating__input"
            name="rating3"
            id="rating3-5"
            value="5"
            type="radio"
            onChange={handleChangeChecked}
            checked={checkedOption === "5"}
          />
        </div>
      ) : (
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
      )}
    </>
  );
};
export default StarRating;
