import React, { useState } from 'react'
import './CardsCarousel.css'

const CardsCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = React.Children.count(children)

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
  }

  return (
    <div className="cards-carousel-container">
      <button className="carousel-nav-btn prev" onClick={prevCard}><i className="bi bi-caret-left-fill"></i></button>
      <div className="cards-carousel-wrapper">
        {React.Children.map(children, (child, index) => {
  let className = "carousel-card-item"
  let style = {}

  if (index === currentIndex) {
    className += " active"
    style = { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 2 };
  } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
    className += " prev-card"
    style = { transform: 'translateX(-30%) scale(0.8)', opacity: 0.6, zIndex: 1 }
  } else if (index === (currentIndex + 1) % totalItems) {
    className += " next-card"
    style = { transform: 'translateX(30%) scale(0.8)', opacity: 0.6, zIndex: 1 }
  } else {
    className += " hidden-card"
    style = { transform: 'translateX(0) scale(0.6)', opacity: 0, zIndex: 0 }
  }

  return (
    <div key={index} className={className} style={{ ...style }}>
      {child}
    </div>
  )
})}
      </div>
      <button className="carousel-nav-btn next" onClick={nextCard}><i className="bi bi-caret-right-fill"></i></button>
    </div>
  )
}

export default CardsCarousel