import React from 'react'
import './Reviews.css'
import ReviewCard from '../ReviewCard/ReviewCard'

const Reviews = () => {
  return (
    <div className='reviews-container' id='reviews'>
      <h3 className='reviews-title'>Contamos con mas de 100 reseñas de personas que confiaron en nosotros y 4.7 estrellas en Google</h3>
      <ReviewCard />
      <a className='see-more-reviews' href='https://www.google.com/travel/hotels/entity/CgsIwY_OvaautviWARAB?q=tierra%20de%20mestizos%20villa%20la%20angostura&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72880339%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73169520%2C73192290%2C73198317&hl=en-AR&gl=ar&cs=1&ssta=1&ts=CAEaSQorEicyJTB4OTYxMGJmNWQyNjY1ZTg4OToweDk2ZjBkOTcyNjdiMzg3YzEaABIaEhQKBwjpDxAMGB4SBwjpDxAMGB8YATICEAAqCQoFOgNBUlMaAA&qs=CAE4AkIJCcGHs2dy2fCWQgkJwYezZ3LZ8JY&ictx=111&ved=0CAAQ5JsGahcKEwiwnPnl78qRAxUAAAAAHQAAAAAQAw&utm_campaign=sharing&utm_medium=link&utm_source=htls' target="_blank" rel="noopener noreferrer">Ver mas reseñas en Google</a>
    </div>
  )
}

export default Reviews
