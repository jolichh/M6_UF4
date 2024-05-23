import React, { useEffect } from 'react'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import db from '../config/config'
import { Link } from 'react-router-dom'

const MovieList = ({ username }) => {
  const [array_movie, setArray_movie ]= useState([])
  var rutaHome = '/';
  var rutaAdd = '/movies/add';
  
  useEffect(()=>{
    var movies_ref = collection(db, "movies")
    getDocs(movies_ref).then((doc)=>{
      //console.log(doc);
      console.log(doc.docs.map((doc)=>{ return {...doc.data(), id:doc.id}}))
      var data = doc.docs.map((doc)=>{ return {...doc.data(), id:doc.id}})
      //mapea solo
      setArray_movie(data)
      console.log(data);
    })
  },[])
  const eliminarMovie = async(movieId)=> {
    
    try {
      // Utiliza doc() para obtener una referencia al documento que deseas eliminar, no es correcto acceder por collection
      const movieRef = doc(db, 'movies', movieId);

      // Utiliza deleteDoc() para eliminar el documento
      await deleteDoc(movieRef);
      setArray_movie(prevMovies => prevMovies.filter(movie => movie.id !== movieId));

      console.log('Película eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar la película:', error);
    }
  }
  return (
    <>
      <div className='ruta'>
        <Link to={rutaHome}>
        <button className="button">
          <span className="lable">Home</span>
        </button>
        </Link>
        <Link to={rutaAdd}>
        <button className="button">
          <span className="lable">Afegir pel·licula</span>
        </button>
        </Link>
      </div>

      <div className='div-list'>
          {array_movie.map((movie) =>(
            <MovieCard 
              key={movie.id}
              title={movie.title}
              image={movie.imageUrl}
              rate={movie.rating}
              direction={movie.director}
              description={movie.description}
              year={movie.year}
              duration={movie.duration}
              onDelete={()=>eliminarMovie(movie.id)}
            ></MovieCard>
          ))}
      </div>

      
      
    </>
  )
}

export default MovieList