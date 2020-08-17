import React from 'react';

const ThumbnailGallery = ({thumbnails, index, selectThumbnail}) => (
    <div className="thumbnail-gallery">
        {index > 0 && (
            <img onClick={() => selectThumbnail(index - 1)} className="thumbnail-arrow-top" src="./images/arrow-head.png" />
        )}
        {thumbnails.map((photo, i) => (
            <div className={index === i ? "thumbnail selected" : "thumbnail"} key={i}>
                <img value={i} onClick={() => selectThumbnail(i)} className="thumbnail-image" src={photo.thumbnail_url} />
            </div>
        ))}
        {index < thumbnails.length -1 && (
            <img onClick={() => selectThumbnail(index + 1)}className="thumbnail-arrow-bottom" src="./images/arrow-head.png" />
        )}
        
    </div>
    
);

export default ThumbnailGallery;