import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import MovieCard from './components/MovieCard'

function App() {
  const [username, setUsername] = useState('')
  const [movieData, setMovieData] = useState(''); // Almacenar los datos de la película

  const handleSubmit = (event) => {
    event.preventDefault();    
    setUsername(event.target.elements.username.value);
  };
 const submitMovieCard = (e) =>{
    e.preventDefault();
    //cosas aqui
 }
 useEffect(()=>{
  //refrescar datos
  const fetchedMovieData = {  //static
    title: 'Inception',
    image: 'https://example.com/inception.jpg',
    rate: 8.8,
    direction: 'Christopher Nolan'
  };
  setMovieData(fetchedMovieData);
 })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Introduce nombre'></input>
        <button type="submit"></button>
      </form>
      <Welcome username={username}></Welcome>
      <MovieCard title={movieData.title} image={movieData.image} rate={movieData.rate} direction={movieData.direction}></MovieCard>
    </>
  )
}

export default App
