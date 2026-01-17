import React from 'react'
import './Location.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const Location = () => {
  const customMarker = new L.Icon({
  iconUrl: 'data:image/svg+xml;utf8,\
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="%23d32f2f">\
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>\
  </svg>',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})
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
          <Marker position={[-40.76122250398941, -71.64627600484281]} icon={customMarker}>
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

