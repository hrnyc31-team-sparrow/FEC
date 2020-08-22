import React, {useState, useEffect} from 'react';

const AddToCart = ({productStyles, index}) => {
  const [currentStyle, setCurrentStyle] = useState();
  const [isFavorite, updateFavorite] = useState(false);
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();
  const toggleFavorite = () => updateFavorite(!isFavorite);
  const createSizeArray = (num) => {
    let array = [];
    for (let i = 0; i <= num; i++) {
      array.push(i);
    }
    return array;
  };

  useEffect(() => {
    setQuantity(size ? (currentStyle.skus[size] < 15 ? createSizeArray(currentStyle.skus[size]) : createSizeArray(15)) : undefined);
  }, [currentStyle, size]);

  useEffect(() => {
    setCurrentStyle(Object.keys(productStyles).length ? productStyles[index] : undefined);
  }, [productStyles, index]);


  return (
    <div className="add-cart-container">
      <div className="select-container">
        <div className="select-size-container" >
          <select className="select-size"
            onChange={e => setSize(e.currentTarget.value)}>
            <option>SELECT SIZE</option>
            {currentStyle && Object.keys(currentStyle.skus).map((size, i) => (
              <option value={size} key={i}>{size}</option>
            ))}
          </select>
        </div>
        <div className="select-quantity-container">
          <select className="select-quantity">
            {quantity && quantity.map((num, i) => (
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