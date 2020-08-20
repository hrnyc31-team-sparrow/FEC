import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import productStylesData from '../../../../mockData/productStylesData';
import ProductInfo from './product-info/ProductInfo.jsx';
import productInfoData from '../../../../mockData/productInfoData';
import { useSelector } from 'react-redux';
import ProductDetails from './product-info/ProductDetails.jsx';

const Overview = () => {
  const [productStyles, setProductStyles] = useState(productStylesData.results);
  const productStyles1 = useSelector(state => state.productStyles);
  const [styleIndex, setStyleIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(productStyles[styleIndex]);
  const [currentStyle1, setCurrentStyle1] = useState();
  const [expandedView, resizeView] = useState(false);
  const toggleExpanded = () => resizeView(!expandedView);
  const toggleStyle = (value) => setStyleIndex(value);
  // const reviewMetadata = useSelector(state => state.reviewMetadata);
  const productInfo = useSelector(state => state.productInfo);
  
  
  useEffect(() => {
    setCurrentStyle1(productStyles1.length ? productStyles1[styleIndex] : null);
    // setCurrentStyle(productStyles[styleIndex]);
  }, [productStyles1, styleIndex]);

  useEffect(() => {
    setCurrentStyle(productStyles[styleIndex]);
  }, [currentStyle, styleIndex]);

  return (
    <div className='overview-parent' >
      <div className='announcement'><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u></div>
      <ImageGallery currentStyle={currentStyle} toggleExpanded={toggleExpanded} expandedView={expandedView} />
      <ProductInfo expandedView={expandedView} currentStyle={currentStyle1} productStyles={productStyles} toggleStyle={toggleStyle} index={styleIndex} />
      <div className='product-description'>
        <h4>Num Styles: {productStyles1.length}</h4>
        <h4>Current Product Name: {currentStyle1 ? `${currentStyle1.name}` : ''}</h4>
      <h4>{productInfo.slogan}</h4>
        <p>{productInfo.description}</p>
      </div>
      <ProductDetails />
      
    </div>
  );
  
};

export default Overview;