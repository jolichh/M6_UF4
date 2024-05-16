import React from 'react'
import { useState } from 'react'
import '../styles/generic-style.css'

const MovieCard = ({ title, image, rate, direction, description, year, duration }) => {
  
  return (
    <>
    
        <div className="card">
          <div className="image"><img src={image}></img></div>
            <div className="content">
              <a href="#">
                <span className="title">{title}</span>
              </a>
              <p className="desc">Rate: {rate}</p>
              <p className="desc">Direction: {direction}</p>
              <p className="desc">Description: {description}</p>
              <p className="desc">Year: {year}</p>
              <p className="desc">Duration: {duration}</p>
            </div>
        </div>
    </>
  )
}

export default MovieCard