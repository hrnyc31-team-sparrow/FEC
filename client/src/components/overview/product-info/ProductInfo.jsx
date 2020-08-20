import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from './Reviews.jsx';
import Styles from './Styles';
import AddToCart from './AddToCart';
import reviewMetadataData from "../../../../../mockData/reviewMetadataData";


const ProductInfo = ({expandedView, productStyles, toggleStyle, index, currentStyle}) => {
    const productInfo = useSelector(state => state.productInfo);
    return (
        <div className={ expandedView ? "product-information info-hidden" : "product-information info-primary"}>
            <div className="product-info-container">
                <div className="expanded-name">
                    <Rating reviewMetadata={reviewMetadataData} />
                    <p style={{marginBottom: "0px", marginTop: "5px"}}>CATEGORY</p>
                    <h1 style={{marginTop: "5px"}}>{productInfo.name}</h1>
                    <p style={{marginTop: "10px"}}>${currentStyle ? `${currentStyle.original_price}`: ''}</p>
                </div>
                <div className="product-styles">
                    <p style={{marginBottom: "3px"}}><b>STYLE > </b>{currentStyle ? `${currentStyle.name.toUpperCase()}`: ''}</p>
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