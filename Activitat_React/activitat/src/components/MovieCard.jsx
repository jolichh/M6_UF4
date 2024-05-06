import React from 'react'
import { useState } from 'react'

const MovieCard = ({ title, image, rate, direction }) => {
  
  return (
    <>
        <h1>Movie Card</h1>
        <div>
            <li>Title: {title}</li>
            <li>Image: {image}</li>
            <li>Rate: {rate}</li>
            <li>Direction: {direction}</li>
        </div>
    </>
  )
}

export default MovieCard