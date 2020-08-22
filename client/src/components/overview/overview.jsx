import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import ProductInfo from './product-info/ProductInfo.jsx';
import { useSelector } from 'react-redux';
import ProductDetails from './product-info/ProductDetails.jsx';
import ProductDescription from './product-info/ProductDescription.jsx';

const Overview = () => {
  const productStyles = useSelector(state => state.productStyles);
  const [styleIndex, setStyleIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState();
  const [expandedView, resizeView] = useState(false);
  const toggleExpanded = () => resizeView(!expandedView);
  const toggleStyle = (value) => setStyleIndex(value);
  
  
  useEffect(() => {
    setCurrentStyle(productStyles.length ? productStyles[styleIndex] : undefined);
  }, [productStyles, styleIndex]);



  return (
    <div className='overview-parent' >
      <div className='announcement'><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u></div>
      <ImageGallery toggleExpanded={toggleExpanded} expandedView={expandedView} currentStyle={currentStyle}/>
      <ProductInfo expandedView={expandedView} currentStyle={currentStyle} productStyles={productStyles} toggleStyle={toggleStyle} index={styleIndex} />
      <ProductDescription />
      <ProductDetails />
    </div>
  );
  
};

export default Overview;