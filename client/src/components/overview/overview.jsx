import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import productStyles from '../../../../mockData/productStylesData';



const Overview = () => {
  const [currentStyle, setCurrentStyle] = useState(productStyles.results[0]);
  const [expandedView, resizeView] = useState(false);
  const toggleExpanded = () => resizeView(!expandedView);


  return (
    <div className='overview-parent' >
      <div className='announcement'>Sitewide Announcement Message!</div>
      <ImageGallery currentStyle={currentStyle} toggleExpanded={toggleExpanded} expandedView={expandedView} />
      <div className={ expandedView ? "product-information info-hidden" : "product-information info-primary"}>Product Overview</div>
      <div className='product-description'>Product Description</div>
      <div className='product-details'>Description checkmarks</div>
    </div>
  );
  
};

export default Overview;