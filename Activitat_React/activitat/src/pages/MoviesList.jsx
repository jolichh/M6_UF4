import React, { useEffect } from 'react'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import { collection, getDocs } from 'firebase/firestore'
import db from '../config/config'

const MovieList = ({ username }) => {
  const [array_movie, setArray_movie ]= useState([])
  
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
          {array_movie.map((movie, i) =>(
            <MovieCard 
              key={i}
              title={movie.title}
              image={movie.image}
              rate={movie.rate}
              direction={movie.direction}
            ></MovieCard>
          ))}
    </>
  )
}

export default MovieList