import React from 'react'
import './AmenityItem.css'

const AmenityItem = ({ icon, description }) => {
    return (
        <li className="amenity-item">
            <i className={`${icon} amenity-icon`}></i> 
            <span className="amenity-description">{description}</span>
        </li>
    )
}

export default AmenityItem