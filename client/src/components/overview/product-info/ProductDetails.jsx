import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const productInfo = useSelector(state => state.productInfo);
  return (
    <div className='product-details'>
      <div className="details-border" />
      <div className="details-list">
        <ul>
          {Object.keys(productInfo).length && productInfo.features.map((feature, i) => (
            <li key={i}><span className="check" />  {feature.value} {feature.feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;