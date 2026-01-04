import React, { useState } from 'react'
import './ImagesCarousel.css'

const ImagesCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const totalImages = images.length;

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % totalImages
    setCurrentImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + totalImages) % totalImages
    setCurrentImageIndex(prevIndex)
  }
  
  const currentImage = images[currentImageIndex]

  return (
    <div className='rooms-images-container'>
      
      <button className="carousel-control prev" onClick={prevImage}>
        <i className="bi bi-caret-left-fill"></i>
      </button>

      <img 
        className='rooms-images' 
        key={currentImageIndex} 
        src={currentImage.src} 
        alt={currentImage.alt} 
      />

      <button className="carousel-control next" onClick={nextImage}>
        <i className="bi bi-caret-right-fill"></i>
      </button>
      
      <div className="image-indicator">
        {currentImageIndex + 1} / {totalImages}
      </div>
    </div>
  )
}

export default ImagesCarousel