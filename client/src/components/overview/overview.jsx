import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import productStylesData from '../../../../mockData/productStylesData';
import ProductInfo from './product-info/ProductInfo.jsx';
import productInfoData from '../../../../mockData/productInfoData';

const Overview = () => {
  const [productStyles, setProductStyles] = useState(productStylesData.results);
  const [styleIndex, setStyleIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(productStyles[styleIndex]);
  const [expandedView, resizeView] = useState(false);
  const [productInfo, setProductInfo] = useState(productInfoData);
  const toggleExpanded = () => resizeView(!expandedView);
  const toggleStyle = (value) => setStyleIndex(value);

  useEffect(() => {
    setCurrentStyle(productStyles[styleIndex]);
  }, [currentStyle, styleIndex]);

  return (
    <div className='overview-parent' >
      <div className='announcement'><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u></div>
      <ImageGallery currentStyle={currentStyle} toggleExpanded={toggleExpanded} expandedView={expandedView} />
      <ProductInfo expandedView={expandedView} productInfo={productInfo} currentStyle={currentStyle} productStyles={productStyles} toggleStyle={toggleStyle} index={styleIndex} />
      <div className='product-description'>Product Description</div>
      <div className='product-details'>Description checkmarks</div>
    </div>
  );
  
};

export default Overview;