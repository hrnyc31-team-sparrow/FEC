import React from 'react';
import { useSelector } from 'react-redux';

const ProductDescription = () => {
  const productInfo = useSelector(state => state.productInfo);
    
  return (
    <div className='product-description'>
      <h4>{productInfo.slogan}</h4>
      <p>{productInfo.description}</p>
    </div>
  );
};

export default ProductDescription;