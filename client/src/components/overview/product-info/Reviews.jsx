import React, { useEffect, useState } from 'react';
import StarRating from '../../ratings-and-reviews/StarRating';
import { useSelector } from 'react-redux';
import reviewMetadataData from '../../../../../mockData/reviewMetadataData'

const Rating = () => {
  //Malfunctioning API - Use dummy data for presentation
  /* const reviewMetadata = useSelector(state => state.reviewMetadata);
  const [ratings, setRatings] = useState();
  const calculateWidth = (ratings) => {
    const totalReviews = ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];
    const averageRating = (ratings[1] + (ratings[2] * 2) + (ratings[3] * 3) + (ratings[4] * 4) + (ratings[5] * 5)) / totalReviews;
    const width = (averageRating / 5) * 100;
    return width;
  };
  const [width, setWidth] = useState();
  */
  const [reviewMetadata, setReviewMetadata] = useState(reviewMetadataData);
  const ratings = reviewMetadata.ratings;

  const totalReviews =
  (reviewMetadata.ratings[1] || 0) +
  (reviewMetadata.ratings[2] || 0) +
  (reviewMetadata.ratings[3] || 0) +
  (reviewMetadata.ratings[4] || 0) +
  (reviewMetadata.ratings[5] || 0);

  const averageRating =

    ((ratings[1] || 0) +
      ((ratings[2] || 0) * 2) +
      ((ratings[3] || 0) * 3) +
      ((ratings[4] || 0) * 4) +
      ((ratings[5] || 0) * 5)) /
    totalReviews
  ;
  const width = (averageRating / 5) * 100;
  /*
  useEffect(() => {
    setRatings(Object.keys(reviewMetadata).length ? reviewMetadata.ratings : undefined);
  }, [reviewMetadata]);
  useEffect(() => {
    console.log('ratings: ', ratings);
    setWidth(ratings ? calculateWidth(ratings) : undefined);
  }, [ratings]);
  */

  return (
    <div className="reviews">
      <span className='vertical-align'>
        <StarRating width={width}/>
      </span>
    </div>
  );
};
  
export default Rating;