import React from 'react';

const Styles = ({productStyles, index, toggleStyle}) => (
    <div className="style-gallery">
        {productStyles.map((style, i) => (
            <div key={i}>
                {index === i && (
                    <img className="checkmark" src="./images/checkmark-circle.png" />
                )}
                <img value={i} onClick={() => toggleStyle(i)} className="style-image" src={style.photos[0].thumbnail_url} />
            </div>
        ))}
    </div>
);

export default Styles;