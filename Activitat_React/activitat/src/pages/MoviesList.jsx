import React, { useEffect } from 'react'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import { collection, getDocs } from 'firebase/firestore'
import db from '../config/config'
import { Link } from 'react-router-dom'

const MovieList = ({ username }) => {
  const [array_movie, setArray_movie ]= useState([])
  var rutaHome = '/';
  var rutaAdd = '/movies/add';
  
  useEffect(()=>{
    var movies_ref = collection(db, "movies")
    getDocs(movies_ref).then((doc)=>{
      console.log(doc);
      console.log(doc.docs.map((doc)=>{ return {...doc.data(), id:doc.id}}))
      var data = doc.docs.map((doc)=>{ return {...doc.data(), id:doc.id}})
      //mapea solo
      setArray_movie(data)
      console.log(data);
    })
  },[])
  return (
    <>
    
      <div className='div-list'>
          {array_movie.map((movie, i) =>(
            <MovieCard 
              key={i}
              title={movie.title}
              image={movie.imageUrl}
              rate={movie.rating}
              direction={movie.director}
              description={movie.description}
              year={movie.year}
              duration={movie.duration}
            ></MovieCard>
          ))}
      </div>

      <div className='ruta'>
        <Link to={rutaHome}>
        <div className="tooltip-container">
          <span className="tooltip">Home</span>
          <span className="text">
            <div className="borde-back">
              <div className="icon">
              </div>
            </div>
          </span>
        </div>
        </Link>
        <Link to={rutaAdd}>
          <div className="tooltip-container">
            <span className="text">
              <div className="borde-back"></div>
              <div className="icon"></div>
            </span>
            <span className="tooltip">Afegir pel·licula</span>
          </div>
        </Link>
      </div>
      
    </>
  )
}

export default MovieList