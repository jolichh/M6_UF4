import React from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard'
import db from '../config/config'
import { addDoc, collection } from 'firebase/firestore'

const moviesAdd = () => {
  
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
        <h1>moviesAdd</h1>
        <form onSubmit={handleSubmit}>
          <label>Título:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>Descripción:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <label>Director:
          <input type="text" name="director" value={formData.director} onChange={handleChange} />
        </label>
        <br />
        <label>URL de la imagen:
          <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        </label>
        <br />
        <label>Calificación (1-5):
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
        </label>
        <br />
        <label>Año:
          <input type="number" name="year" value={formData.year} onChange={handleChange} />
        </label>
        <br />
        <label>Duración (min):
          <input type="number" name="duration" value={formData.duration} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Agregar Película</button>
        </form>
    </>
  )
}

export default moviesAdd