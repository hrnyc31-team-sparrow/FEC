import React, { useState, useEffect } from 'react';
import Rating from './Reviews.jsx';
import Styles from './Styles';
import AddToCart from './AddToCart';
import reviewMetadataData from "../../../../../mockData/reviewMetadataData";


const ProductInfo = ({expandedView, productInfo, productStyles, currentStyle, toggleStyle, index}) => {
    const [reviewMetadata, setReviewMetadata] = useState(reviewMetadataData);
    const ratings = reviewMetadata.ratings;
    const totalReviews = ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];
    return (
        <div className={ expandedView ? "product-information info-hidden" : "product-information info-primary"}>
            <div className="product-info-container">
                <div className="expanded-name">
                    <Rating reviewMetadata={reviewMetadata} totalReviews={totalReviews} />
                    <p style={{marginBottom: "0px", marginTop: "5px"}}>CATEGORY</p>
                    <h1 style={{marginTop: "5px"}}>{productInfo.name}</h1>
                    <p style={{marginTop: "10px"}}>${currentStyle.original_price}</p>
                </div>
                <div className="product-styles">
                    <p style={{marginBottom: "3px"}}><b>STYLE > </b>{currentStyle.name.toUpperCase()}</p>
                    <Styles productStyles={productStyles} toggleStyle={toggleStyle} index={index} />
                </div>
                <div className="add-cart">
                    <AddToCart index={index} productStyles={productStyles} />
                </div>
            </div>
            
        </div>
    );
    
};

export default ProductInfo;