import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      <div className='app-container'>

        <div className='header'>
          <form onSubmit={handleSubmit}>
            <input className='form-input' type="text" name="username" placeholder='Introduce nombre'></input>
            <button className='form-but' type="submit">Guardar</button>
          </form>
          <Welcome username={username}></Welcome>
        </div>

        {/* <MovieCard title={movieData.title} image={movieData.image} rate={movieData.rate} direction={movieData.direction}></MovieCard> */}
        
        {/*swtich evita que se renderize multiples componentes si el nombre coincide parcialmente con otras*/}
        {/* usamons element para definir el componente ya que no es un componente de Route component */}
        <Routes>
          <Route exact path="/" element={<IndexMenu/>} />
          <Route path="/movies/list" element={<MoviesList />} />        
          <Route path="/movies/add" element={<MoviesAdd />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
