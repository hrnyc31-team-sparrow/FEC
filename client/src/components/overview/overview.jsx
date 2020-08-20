import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import productStylesData from '../../../../mockData/productStylesData';
import ProductInfo from './product-info/ProductInfo.jsx';
import productInfoData from '../../../../mockData/productInfoData';
import { useSelector } from 'react-redux';

const Overview = () => {
  const [productStyles, setProductStyles] = useState(productStylesData.results);
  const [styleIndex, setStyleIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(productStyles[styleIndex]);
  const [expandedView, resizeView] = useState(false);
  const [productInfo, setProductInfo] = useState(productInfoData);
  const toggleExpanded = () => resizeView(!expandedView);
  const toggleStyle = (value) => setStyleIndex(value);
  const reviewMetadata = useSelector(state => state.reviewMetadata);

  useEffect(() => {
    setCurrentStyle(productStyles[styleIndex]);
  }, [currentStyle, styleIndex]);

  return (
    <div className='overview-parent' >
      <div className='announcement'><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u></div>
      <ImageGallery currentStyle={currentStyle} toggleExpanded={toggleExpanded} expandedView={expandedView} />
      <ProductInfo expandedView={expandedView} productInfo={productInfo} currentStyle={currentStyle} productStyles={productStyles} toggleStyle={toggleStyle} index={styleIndex} />
      <div className='product-description'>
      <h4>{productInfo.slogan} Metadata Id: {reviewMetadata.product_id}</h4>
        <p>{productInfo.description}</p>
      </div>
      <div className='product-details'>
        <div className="details-border" />
        <div className="details-list">
          <ul>
            {productInfo.features.map((feature) => (
              <li><span className="check" />  {feature.value} {feature.feature}</li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
  
};

export default Overview;