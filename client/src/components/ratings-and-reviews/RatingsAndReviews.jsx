import React from "react"
import Ratings from "./Ratings"
import ReviewsFeed from "./ReviewsFeed"
import StarRatings from './StarRatings'

const RatingsAndReviews = ({reviewsList , reviewMetadata}) => (
  <div className='wrapper ratings-and-reviews-container'>
    <div className='title'>
      <p>RATINGS & REVIEWS</p>
    </div>
  <StarRatings reviewMetadata={reviewMetadata} reviewsList={reviewsList}/>
  <ReviewsFeed reviewMetadata={reviewMetadata} reviewsList={reviewsList}/>
  </div>
)

export default RatingsAndReviews;