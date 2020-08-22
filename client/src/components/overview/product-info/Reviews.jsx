import React, { useEffect, useState } from 'react';
import StarRating from '../../ratings-and-reviews/StarRating';
import reviewMetadataData from "../../../../../mockData/reviewMetadataData";
import { useSelector } from 'react-redux';

const Rating = () => {
  const reviewMetadata = useSelector(state => state.reviewMetadata);
  const [ratings, setRatings] = useState();
  const calculateWidth = (ratings) => {
    const totalReviews = ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];
    const averageRating = (ratings[1] + (ratings[2] * 2) + (ratings[3] * 3) + (ratings[4] * 4) + (ratings[5] * 5)) / totalReviews;
    const width = (averageRating / 5) * 100;
    return width;
  };
  const [width, setWidth] = useState();


  useEffect(() => {
    setRatings(Object.keys(reviewMetadata).length ? reviewMetadata.ratings : undefined);
  }, [reviewMetadata]);
  useEffect(() => {
    setWidth(ratings ? calculateWidth(ratings) : undefined);
  }, [ratings]);
  
  return (
    <div className="reviews">
      <span className='vertical-align'>
        <StarRating width={width}/>
        {/* <span>  <u>Read all reviews</u></span> */}
      </span>
    </div>
  );
};
  
export default Rating;