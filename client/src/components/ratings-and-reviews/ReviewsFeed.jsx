import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import moment from "moment";
import apiMaster from "../../apiMaster.js";
import altImage from '../../../dist/lib/altImage.png';

const ReviewsFeed = ({
  reviewMetadata,
  reviewsList,
  handleClickHelpful,
  handleClickReport,
  totalReviews,
  updateReviewListState
}) => {
  const sortOptions =['Relevant' , 'Helpful', 'Newest']
  const [currentSort, setCurrentSort] = useState('relevant')
  const [currentIndex, setCurrentIndex] = useState(4)
  const {addReview} = apiMaster;
  console.log(reviewsList)

  const handleSortChange = (event) => {
    event.preventDefault()
    let newSort = event.target.value.toLowerCase()
    Promise.resolve(setCurrentSort(newSort))
   .then(() => {
    updateReviewListState(reviewsList.product, 2,  newSort)
   })
   .catch(err=>{
     console.log(err)
   })
  }

  const getMoreReviews = (event) => {
    event.preventDefault()
    if(currentIndex <= totalReviews) {
      Promise.resolve(setCurrentIndex(currentIndex+2))
      .then(() => {
        updateReviewListState(reviewsList.product, currentIndex, currentSort)
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      setCurrentIndex(2)
    }

  }

  const launchModal = () => {

  }

  const reader = new FileReader();




  return (
    <div className="reviews">
      <div className="text-style-1">
        {totalReviews} reviews, sorted by{" "}
        <select className="clickable" id="sorting" value={currentSort[0].toUpperCase()+currentSort.slice(1)} onChange={handleSortChange} >
          {sortOptions.map(option => {
            return(
          <option className = "text-style-1" value={option}>{option}</option>
            )
          })}
          </select>
      </div>
      <br />
      <br />
      <div className="review-feed-container">
        {reviewsList.results !== undefined ? (
          reviewsList.results.map((review, index) => {
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
                  <p className="review-title text-style-1">{review.summary}</p>
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

                {review.response !== null ? (
                  <div className="review-response-container">
                    <p className="review-response-header">
                      Response from seller:
                    </p>
                    <p className="review-response">{review.response}</p>
                  </div>
                ) : (
                  <></>
                )}
                <br />

                  {review.photos.length > 0 ?
                  <div>
                    {review.photos.map(photo => {
                      return (

                        <img className='photo-thumbnail' src={altImage} ></img>

                      )
                    })}
                    </div>
                    :<></>
                  }

                <span className="text-style-2">
                  Helpful?{" "}
                  <span
                    className="clickable "
                    onClick={() => {
                      handleClickHelpful(review.review_id, reviewsList.product);
                    }}
                  >
                    Yes
                  </span>
                  ({review.helpfulness}) /
                  <span className="clickable">No</span> |
                  <span
                    className="clickable"
                    onClick={() => {
                      handleClickReport(review.review_id, reviewsList.product);
                    }}
                  >
                    Report
                  </span>
                </span>
              </div>
            );

          })
        ) : (
          <div>loading</div>
        )}
      </div>
      {currentIndex < totalReviews ?
      <div className='loadOrAdd-container'>
      <button className='load text-style-1' onClick={getMoreReviews}>More Reviews </button>
      <button className='add text-style-1' onClick={launchModal}>Add A Review + </button>
      </div>
      : <button className='load text-style-1' onClick={launchModal}>Add A Review + </button>
      }
    </div>
  );
};

export default ReviewsFeed;
