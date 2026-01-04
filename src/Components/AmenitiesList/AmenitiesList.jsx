import React from 'react'
import AmenityItem from '../AmenityItem/AmenityItem.jsx'
import './AmenitiesList.css'

const AmenitiesList = ({ amenities }) => {

    if (!amenities || !Array.isArray(amenities) || amenities.length === 0) {
        return null
    }
    
    return (
        <div className='amenities-wrapper'>
            <ul className="amenities-list-grid"> 
                {amenities.map((amenity, index) => (
                    <AmenityItem 
                        key={index} 
                        icon={amenity.icon} 
                        description={amenity.description}
                    />
                ))}
            </ul>
        </div>
    )
}

export default AmenitiesList