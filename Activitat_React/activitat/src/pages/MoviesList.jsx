import React from 'react'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'

const MovieList = ({ username }) => {
  var array_movie = [
    { title: 'Inception', image: 'inception.jpg', rate: 8.8, direction: 'Christopher Nolan' },
    { title: 'Interstellar', image: 'interstellar.jpg', rate: 8.6, direction: 'Christopher Nolan' },
    { title: 'The Dark Knight', image: 'dark_knight.jpg', rate: 9.0, direction: 'Christopher Nolan' },
  ]
  return (
    <>
        <p>movieslist</p>
        <ul>
          {array_movie.map((movie, i) =>(
            <MovieCard 
              key={i}
              title={movie.title}
              image={movie.image}
              rate={movie.rate}
              direction={movie.direction}
            ></MovieCard>
          ))}
        </ul>
    </>
  )
}

export default MovieList