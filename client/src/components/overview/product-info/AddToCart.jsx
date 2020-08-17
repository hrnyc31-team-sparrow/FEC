import React, {useState, useEffect} from 'react';

const AddToCart = ({productStyles, index}) => {
  const quantity = [];
  for (let i = 0; i < 15; i++) {
    quantity.push(i);
  }
  const [isFavorite, updateFavorite] = useState(false);
  const toggleFavorite = () => updateFavorite(!isFavorite);

  return (
    <div className="add-cart-container">
      <div className="select-container">
        <div className="select-size-container" >
          <select className="select-size" >
            <option>SELECT SIZE</option>
            {Object.keys(productStyles[index].skus).map((size, i) => (
              <option key={i}>{size}</option>
            ))}
          </select>
        </div>
        <div className="select-quantity-container">
          <select className="select-quantity">
            {quantity.map((num, i) => (
              <option>{num}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="cart-button-container">
          <div className="add-button-container">
            <button className="cart-button">ADD TO CART     +</button>
          </div>
          <div className="favorite-button-container">
            <button onClick={() => toggleFavorite()} className={isFavorite ? "favorite-button selected" : "favorite-button default"}>★</button>
          </div>
      </div>
    </div>
  );
};

export default AddToCart;