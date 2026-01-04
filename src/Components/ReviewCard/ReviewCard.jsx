import React from 'react'
import './ReviewCard.css'
import { REVIEWS_DATA } from '../../Services/Reviews.jsx'

const ReviewCard = () => {
  return (
    <div className='review-card-container'>
      {
        REVIEWS_DATA.map((review, index) => (
          <div className='review-card' key={index}>
            <div className='review-card-header'>
              <img src={review.profile_picture} className='review-pfp'></img>
              <div className='name-rating-container'>
                <p className='review-name'>{review.name}</p>
                <div className='stars-container'>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                </div>
              </div>
            </div>
            <p className='review-comment'>{review.comment}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ReviewCard
