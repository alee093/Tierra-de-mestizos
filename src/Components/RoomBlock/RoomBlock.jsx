import React from 'react';
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel.jsx'
import AmenitiesList from '../AmenitiesList/AmenitiesList.jsx';
import './RoomBlock.css'

const RoomBlock = ({ roomData }) => { 

  if (!roomData || !roomData.images || roomData.images.length === 0) {
    return <div>No hay información de la habitación disponible.</div>
  }

  return (
    <div className='room-section-container'> 
      <ImagesCarousel images={roomData.images} /> 
      <h2 className='room-title'>{roomData.title}</h2>
      <AmenitiesList amenities={roomData.amenities} />
    </div>
  )
}

export default RoomBlock;