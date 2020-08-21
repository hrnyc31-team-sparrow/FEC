import React from 'react';

const ThumbnailGallery = ({thumbnails, index, selectThumbnail}) => (
  <div className="thumbnail-gallery">
    {index > 4 && (
      <img onClick={() => selectThumbnail(index - 1)} className="thumbnail-arrow-top" src="./images/arrow-head.png" />
    )}
    {thumbnails && (thumbnails.map((photo, i) => {
      if (index < 5 && i < 5) {
        return (
          <div className={index === i ? "thumbnail selected" : "thumbnail"} key={i}>
            <img value={i} onClick={() => selectThumbnail(i)} className="thumbnail-image" src={photo.thumbnail_url} />
          </div>
        );
      } else if (index > 4 && i > index - 5) {
        return (
          <div className={index === i ? "thumbnail selected" : "thumbnail"} key={i}>
            <img value={i} onClick={() => selectThumbnail(i)} className="thumbnail-image" src={photo.thumbnail_url} />
          </div>
        );
      }
            
    }))}
    {thumbnails && (index < thumbnails.length - 1 && (
      <img onClick={() => selectThumbnail(index + 1)}className="thumbnail-arrow-bottom" src="./images/arrow-head.png" />
    ))}
        
  </div>
    
);

export default ThumbnailGallery;