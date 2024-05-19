import React from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard'
import db from '../config/config'
import { addDoc, collection } from 'firebase/firestore'
import '../styles/generic-style.css'
import { Link } from 'react-router-dom'

const moviesAdd = () => {
  var rutaHome = '/';
  var rutaList = '/movies/list';
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    director: '',
    imageUrl: '',
    rating: '',
    year: '',
    duration: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("afegir");
    // Obtener datos del form
    const formData = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      director: e.target.elements.director.value,
      imageUrl: e.target.elements.imageUrl.value,
      rating: e.target.elements.rating.value,
      year: e.target.elements.year.value,
      duration: e.target.elements.duration.value
    };
    console.log(formData);
    
    var movies_ref = collection(db, "movies");
    addDoc(movies_ref, formData).then((doc)=>{console.log(doc)});
    //Limpiar el formulario después de agregar la película
        setFormData({
          title: '',
          description: '',
          director: '',
          imageUrl: '',
          rating: '',
          year: '',
          duration: ''
        });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className='ruta'>
        <Link to={rutaHome}>
        <button className="button">
          <span className="lable">Home</span>
        </button>
        </Link>
        <Link to={rutaList}>
        <button className="button">
          <span className="lable">Llista de pel·licules</span>
        </button>
        </Link>
      </div>

      <div className='moviesAdd'>
        <h1>Afegeix una pel·licula:</h1>
        <div className='form-add'>
          
          <form onSubmit={handleSubmit}>
            <label className='label'>Títol:
            <input className='input' type="text" name="title" value={formData.title} onChange={handleChange} required/>
            </label>
            <br />
            <label className='label'>Descripció:
            <input className='input' type="text" name="description" value={formData.description} onChange={handleChange} required/>
            </label>
            <br />
            <label className='label'>Director:
            <input className='input'type="text" name="director" value={formData.director} onChange={handleChange} required/>
            </label>
            <br />
            <label className='label'>URL de la imatge:
            <input className='input' type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required/>
            </label>
            <br />
            <label className='label'>Calificació (1-5):
            <input className='input' type="number" name="rating" value={formData.rating} onChange={handleChange} required/>
            </label>
            <br />
            <label className='label'>Any:
            <input className='input' type="number" name="year" value={formData.year} onChange={handleChange} required/>
            </label>
            <br />
            <label className='label'>Duració (en minuts):
            <input className='input' type="number" name="duration" value={formData.duration} onChange={handleChange} required/>
            </label>
            <br />
            <div className='but-form'>
              <button className="buttAdd"type="submit">Afegir película</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default moviesAdd