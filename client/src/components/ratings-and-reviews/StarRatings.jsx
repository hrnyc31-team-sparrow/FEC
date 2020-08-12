import React, { useState, useEffect } from "react";
import axios from "axios";
const api = "http://18.224.200.47/";

const StarRatings = ({reviewMetadata, reviewsList}) => {
  // const [metaData, setMetaData] = useState({});

  // // const {ratings, recommended, characteristics, product_id} = metaData
  // console.log(metaData)
  // // const averageRating = ratings[1] + (ratings[2] * 2) + (ratings[3] * 3) + (ratings[4] * 4) + (ratings[5] * 5) / ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];
  // // const width= (averageRating / 5) * 100

  // useEffect(() => {
  //   const getMetadata = (id) => {
  //     axios
  //       .get(`${api}reviews/${id}/meta`)
  //       .then(({data}) => {
  //         console.log(data)
  //         setMetaData(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getMetadata(1);
  // }, []);


  return (
    <div className="ratings">
      <span className="average-rating">3.5</span>
      {"                    "}

      <div className="average-star-rating">
        <div className="average-rating-upper" style={{ width: '70%'}}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <div className="average-rating-lower">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
      <br />
      <br />
      {/* Percentage: <input id="p" type="text"/><input id="apply" type="submit"/> */}
    </div>
  );
};

export default StarRatings;

//example meta data
// {
//   "product_id": "1",
//   "ratings": {
//       "1": 1,
//       "2": 1,
//       "3": 15,
//       "4": 5,
//       "5": 8
//   },
//   "recommended": {
//       "0": 11,
//       "1": 19
//   },
//   "characteristics": {
//       "Fit": {
//           "id": 1,
//           "value": "2.4615"
//       },
//       "Length": {
//           "id": 2,
//           "value": "2.8519"
//       },
//       "Comfort": {
//           "id": 3,
//           "value": "2.6296"
//       },
//       "Quality": {
//           "id": 4,
//           "value": "2.7308"
//       }
//   }
// }
