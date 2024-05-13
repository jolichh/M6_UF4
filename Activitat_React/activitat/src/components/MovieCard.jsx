import React from 'react'
import { useState } from 'react'
import '../styles/movieCard_style.css'

const MovieCard = ({ title, image, rate, direction, description, year, duration }) => {
  
  return (
    <>
        <div className='container-movieCard'>
            <h2>{title}</h2>
            <div className='info'>
              <img src={image}></img>
              <li></li>
              <li>Rate: {rate}</li>
              <li>Direction: {direction}</li>
              <p>Description: {description}</p>
              <p>Year: {year}</p>
              <p>Duration: {duration}</p>
            </div>
        </div>
    </>
  )
}

export default MovieCard