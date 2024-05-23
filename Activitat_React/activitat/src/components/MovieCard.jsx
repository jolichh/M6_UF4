import React from 'react'
import { useState } from 'react'
import '../styles/generic-style.css'
import {AiOutlineDelete} from 'react-icons/ai';

const MovieCard = ({ title, image, rate, direction, description, year, duration, onDelete }) => {
  
  return (
    <>
    
        <div className="card">
          <div className="image">
            <img src={image}></img>
          </div>
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
          <div className='delete-but'>
            <button className='butt-movie' onClick={onDelete}><AiOutlineDelete/></button>
          </div>
        </div>
    </>
  )
}

export default MovieCard