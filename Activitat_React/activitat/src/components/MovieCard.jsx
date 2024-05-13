import React from 'react'
import { useState } from 'react'
import '../styles/movieCard_style.css'

const MovieCard = ({ title, image, rate, direction }) => {
  
  return (
    <>
        <div className='container-movieCard'>
            <h2>{title}</h2>
            <div className='info'>
              <li>Image: {image}</li>
              <li>Rate: {rate}</li>
              <li>Direction: {direction}</li>
            </div>
        </div>
    </>
  )
}

export default MovieCard