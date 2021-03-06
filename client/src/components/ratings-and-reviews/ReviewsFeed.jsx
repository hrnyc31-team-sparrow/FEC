import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import moment from "moment";
import { addReview } from "../../apiMaster.js";
import altImage from "../../../dist/lib/altImage.jpg";
import Modal from "./Modal";

const ReviewsFeed = ({
  reviewMetadata,
  reviewsList,
  handleClickHelpful,
  handleClickReport,
  totalReviews,
  updateReviewListState,
  productInfoData,
  currentSort,
  currentIndex,
  setCurrentIndex,
  setCurrentSort,
  updateReviewMetadataState,
}) => {
  const sortOptions = ["Relevant", "Helpful", "Newest"];
  const [showModal, setShowModal] = useState(false);
  const [currentModalView, setCurrentModalView] = useState("photo");

  const handleSortChange = (event) => {
    event.preventDefault();
    let newSort = event.target.value.toLowerCase();
    Promise.resolve(setCurrentSort(newSort))
      .then(() => {
        updateReviewListState(reviewsList.product, totalReviews, newSort);
        {
          setCurrentIndex(1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMoreReviews = () => {
    if (currentIndex < totalReviews) {
      setCurrentIndex(currentIndex + 2);
    } else {
      setCurrentIndex(1);
    }
  };

  const handleClickAdd = () => {
    setShowModal(true);
    setCurrentModalView("Add");
  };

  const handleClickPhoto = () => {
    setShowModal(true);
    setCurrentModalView("photo");
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const displayModal = (photo) => {
    return (
      <Modal
        photo={photo}
        currentModalView={currentModalView}
        updateReviewListState={updateReviewListState}
        productInfoData={productInfoData}
        showModal={showModal}
        handleClose={handleClose}
        currentSort={currentSort}
        currentIndex={currentIndex}
        reviewsList={reviewsList}
        updateReviewMetadataState ={updateReviewMetadataState }
        totalReviews={totalReviews}
      />
    );
  };

  return (
    <div className="reviews">
      {showModal === true ? displayModal() : <></>}
      <div className="text-style-1">
        {totalReviews} reviews, sorted by
        <select
          className="clickable"
          id="sorting"
          value={currentSort[0].toUpperCase() + currentSort.slice(1)}
          onChange={handleSortChange}
        >
          {sortOptions.map((option) => {
            return (
              <option className="text-style-1" value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <br />
      <div className="review-feed-container">
        {reviewsList.results !== undefined ? (
          reviewsList.results
            .map((review, index) => {
              return (
                <div className="review-container">
                  <StarRating width={(review.rating / 5) * 100} />
                  <span className="user-and-date text-style-2">
                    {review.reviewer_name},{" "}
                    {moment(review.date).format("MMM D, YYYY")}
                  </span>
                  <br />

                  {review.summary.length > 60 ? (
                    <>
                      <p className="review-title text-style-1">
                        {review.summary.slice(0, 61)}...
                      </p>
                      <p className="review-title-balance text-style-2">
                        ...{review.summary.slice(61, review.summary.length)}
                      </p>
                    </>
                  ) : (
                    <p className="review-title text-style-1">
                      {review.summary}
                    </p>
                  )}

                  <p className="review-body text-style-2">{review.body}</p>

                  {review.recommend === 1 ? (
                    <p className="text-style-2">
                      {" "}
                      <span className="check"></span> I recommend this product
                    </p>
                  ) : (
                    <></>
                  )}

                  {review.response.length > 0 ? (
                    <div className="review-response-container">
                      <p className="review-response">Response from seller:</p>
                      <p className="review-response">{review.response}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                  <br />

                  {review.photos.length > 0 ? (
                    <div>
                      {review.photos.map((photo) => {
                        return (
                          <>
                            {showModal === true ? displayModal('https://images.unsplash.com/photo-1548883354-7622d03aca27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1861&q=80') : <></>}
                            <img
                              className="photo-thumbnail"
                              src='https://images.unsplash.com/photo-1548883354-7622d03aca27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1861&q=80'
                              onClick={handleClickPhoto}
                            ></img>
                          </>
                        );
                      })}
                    </div>
                  ) : (
                    <></>
                  )}

                  <span className="text-style-2">
                    Helpful?{" "}
                    <span
                      className="clickable margin-sides"
                      onClick={() => {
                        handleClickHelpful(
                          review.review_id,
                          reviewsList.product,
                          totalReviews,
                          currentSort
                        );
                      }}
                    >
                      Yes
                    </span>
                    ({review.helpfulness}) /
                    <span className="clickable margin-sides">No</span> |
                    <span
                      className="clickable margin-sides"
                      onClick={() => {
                        handleClickReport(
                          review.review_id,
                          reviewsList.product,
                          totalReviews,
                          currentSort
                        );
                      }}
                    >
                      Report
                    </span>
                  </span>
                </div>
              );
            })
            .slice(0, currentIndex + 1)
        ) : (
          <div>loading</div>
        )}
      </div>
      {currentIndex < totalReviews ? (
        <div className="loadOrAdd-container">
          <button className="load text-style-1" onClick={getMoreReviews}>
            More Reviews{" "}
          </button>
          <button className="add text-style-1" onClick={handleClickAdd}>
            Add A Review +{" "}
          </button>
        </div>
      ) : (
        <button className="load text-style-1" onClick={handleClickAdd}>
          Add A Review +{" "}
        </button>
      )}
    </div>
  );
};

export default ReviewsFeed;
