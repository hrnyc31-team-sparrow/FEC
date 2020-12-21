import React, { useState, useEffect } from 'react';
import ThumbnailGallery from './ThumbnailGallery';
import ReactDOM from 'react-dom';

const ImageGallery = ({expandedView, toggleExpanded, currentStyle}) => {
  const [index, changeIndex] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [thumbnails, setThumbnails] = useState();
  const [zoomView, setZoom] = useState(false); 
  const selectThumbnail = (value) => changeIndex(value);
  const toggleZoom = () => setZoom(!zoomView);
  const [zoomedImageDims, setZoomedImageDims] = useState();
  const [mouseCoordinates, setMouseCoordinates] = useState();
  
  useEffect(() => {
    setCurrentPhoto(currentStyle ? currentStyle.photos[index] : undefined);
  }, [currentStyle, index]);

  useEffect(() => {
    setThumbnails(currentStyle ? currentStyle.photos : undefined);
  }, [currentStyle]);


  return (
    <div className={ expandedView ? "image-gallery expanded-image" : "image-gallery primary-image"}>
      <div className="image-container" >
        <img className={ expandedView ? zoomView ? "main-image zoomed" : "main-image expanded" : "main-image default"}
          src={ currentPhoto ? currentPhoto.url : ''}
          onClick={expandedView ? toggleZoom : toggleExpanded}
          style={
            zoomView && mouseCoordinates
              ? {
                  objectPosition: `${(mouseCoordinates.x * 100) / zoomedImageDims[0]}% ${
                    (mouseCoordinates.y * 100) / zoomedImageDims[1]
                  }%`,
                }
              : null
          }
          onMouseMove={(e) => {
            if (zoomView) {
              setMouseCoordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
              setZoomedImageDims([
                Number(
                  window.getComputedStyle(ReactDOM.findDOMNode(e.target)).getPropertyValue('width').split('px').join(''),
                ),
                Number(
                  window.getComputedStyle(ReactDOM.findDOMNode(e.target)).getPropertyValue('height').split('px').join(''),
                ),
              ]);
            }
          }}
          
        />
        <div className="overlay-container">
          <ThumbnailGallery index={index} selectThumbnail={selectThumbnail} thumbnails={thumbnails} />
          <img 
            onClick={toggleExpanded}
            className="expand-view" 
            src="./images/expand-view.png" />
          {currentStyle && (index < currentStyle.photos.length - 1 && (
            <img
              onClick={() => changeIndex(index + 1)} 
              className="arrow-right" src='./images/main-arrow.png' />
          ))
          }
          {currentStyle && (index > 0 && (
            <img
              onClick={() => changeIndex(index - 1)}
              className="arrow-left" src='./images/main-arrow.png' />
          ))
          }
          
        </div>
      </div>
    </div>
  ); 
};

export default ImageGallery;