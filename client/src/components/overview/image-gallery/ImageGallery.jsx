import React, { useState, useEffect } from 'react';
import ThumbnailGallery from './ThumbnailGallery';

const ImageGallery = ({currentStyle, expandedView, toggleExpanded}) => {
  const [index, changeIndex] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(currentStyle.photos[index]);
  const [thumbnails, setThumbnails] = useState(currentStyle.photos);
  const [zoomView, setZoom] = useState(false); 
  const selectThumbnail = (value) => changeIndex(value);
  const toggleZoom = () => setZoom(!zoomView);
  
  useEffect(() => {
    setCurrentPhoto(currentStyle.photos[index]);
  }, [currentStyle, index]);

  useEffect(() => {
    setThumbnails(currentStyle.photos);
  }, [currentStyle]);


  return (
    <div className={ expandedView ? "image-gallery expanded-image" : "image-gallery primary-image"}>
      <div className="image-container">
        <img className={expandedView ? zoomView ? "main-image zoomed" : "main-image expanded" : "main-image default"} onClick={expandedView ? toggleZoom : toggleExpanded} src={currentPhoto.url} />
        <div className="overlay-container">
          <ThumbnailGallery index={index} selectThumbnail={selectThumbnail} thumbnails={thumbnails} />
            <img 
                onClick={toggleExpanded}
                className="expand-view" 
                src="./images/expand-view.png" />
          {index < currentStyle.photos.length - 1 && (
            <img
              onClick={() => changeIndex(index + 1)} 
              className="arrow-right" src='./images/main-arrow.png' />
          )
          }
          {index > 0 && (
            <img
                onClick={() => changeIndex(index - 1)}
                className="arrow-left" src='./images/main-arrow.png' />
          )
          }
          
        </div>
      </div>
    </div>
  ); 
};

export default ImageGallery;