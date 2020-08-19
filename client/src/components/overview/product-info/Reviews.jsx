import React from 'react';
import StarRating from '../../ratings-and-reviews/StarRating';

const Rating = ({reviewMetadata, reviewsList, totalReviews}) => {
  const ratings = reviewMetadata.ratings;
  const averageRating = (ratings[1] + (ratings[2] * 2) + (ratings[3] * 3) + (ratings[4] * 4) + (ratings[5] * 5)) / totalReviews;
  const width = (averageRating / 5) * 100;
  
  return (
    <div className="reviews">
      <span className='vertical-align'>
        <StarRating width={width}/>
        <span>  <u>Read all reviews</u></span>
      </span>
    </div>
  );
};
  
export default Rating;