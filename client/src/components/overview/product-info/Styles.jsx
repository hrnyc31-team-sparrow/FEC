import React from 'react';

const Styles = ({productStyles, index, toggleStyle}) => (
    <div className={productStyles.length && (productStyles.length > 8 ? "style-gallery-expanded" : "style-gallery")}>
        {productStyles.length && productStyles.map((style, i) => (
            <div className="style-container" key={i}>
                
                <img value={i} onClick={() => toggleStyle(i)} className="style-image" src={style.photos[0].thumbnail_url} />
                {index === i && (
                    <img className="checkmark" src="./images/checkmark-circle.png" />
                )}
            </div>
        ))}
    </div>
);

export default Styles;