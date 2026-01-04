import React from 'react'
import './Location.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const Location = () => {
  return (
    <div id='location'>
      <div className='location-container' >
        <div className='text-container'>
          <h2 className='location-title'>¿Donde nos encontramos?</h2>
          <ul>
            <li className='location-text'><i class="bi bi-geo-alt-fill"></i>Las Fucsias 156, Villa la Angostura.</li>
            <li className='location-text'><i class="bi bi-map-fill"></i>Excelente ubicacion en el centro de la ciudad.</li>
            <li className='location-text'><i class="bi bi-pin-map-fill"></i>A tan solo 100m de la avenida principal.</li>
            <li className='location-text'><i class="bi bi-bus-front"></i>Y a 50m de la terminal de omnibus.</li>
          </ul>
        </div>
        <MapContainer center={[-40.7612250398941, -71.64606600484281]} zoom={13}>
          <TileLayer
            attribution='&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>" contributors_'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[-40.76122250398941, -71.64627600484281]}>
            <Popup>
              Tierra de Mestizos
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Location

