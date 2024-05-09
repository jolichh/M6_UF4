import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import MovieCard from './components/MovieCard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexMenu from './pages/IndexMenu.jsx'
import MoviesAdd from './components/MoviesAdd.jsx'
import MoviesList from './pages/MoviesList'
import ReactDOM from "react-dom";

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
  //efecto al refrescar datos
  const fetchedMovieData = {  //static
    title: 'Inception',
    image: 'https://example.com/inception.jpg',
    rate: 8.8,
    direction: 'Christopher Nolan'
  };
  setMovieData(fetchedMovieData);
 },[])

  return (  
    <>
    <Router>

      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Introduce nombre'></input>
        <button type="submit"></button>
      </form>
      <Welcome username={username}></Welcome>
      {/* <MovieCard title={movieData.title} image={movieData.image} rate={movieData.rate} direction={movieData.direction}></MovieCard> */}
      
      {/*swtich evita que se renderize multiples componentes si el nombre coincide parcialmente con otras*/}
      {/* usamons element para definir el componente ya que no es un componente de Route component */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route exact path="/" element={<IndexMenu/>} />
        {/* Ruta para la lista de películas */}
        <Route path="/movies/list" element={<MoviesList />} />        
        {/* Ruta para agregar una nueva película */}
        <Route path="/movies/add" element={<MoviesAdd />} />
      </Routes>

    </Router>
    </>
  )
}

export default App
