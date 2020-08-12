import React from "react"
import Ratings from "./Ratings"
import ReviewsFeed from "./ReviewsFeed"

const RatingsAndReviews = ({reviewMetaData}) => (
  <div className='wrapper ratings-and-reviews-container'>
    <div className='title'>
      <p>RATINGS & REVIEWS</p>
    </div>
  <Ratings/>
  <ReviewsFeed/>
  </div>
)

export default RatingsAndReviews;