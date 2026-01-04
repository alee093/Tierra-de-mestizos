import React from 'react';
import RoomBlock from '../RoomBlock/RoomBlock.jsx';
import ALL_ROOMS_AND_SPACES from '../../Services/Rooms.js'
import './Rooms.css'
import CardsCarousel from '../CardsCarousel/CardsCarousel.jsx';

const Rooms = () => {
  return (
    <section className="all-rooms" id='rooms'>
      <h1 className="section-main-header">Nuestras Habitaciones</h1>
      <CardsCarousel>
        {ALL_ROOMS_AND_SPACES.map((room) => (
          <RoomBlock 
            key={room.title}
            roomData={room}
          />
        ))}
      </CardsCarousel>
    </section>
  )
}

export default Rooms
