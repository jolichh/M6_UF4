import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/generic-style.css'

const Card = ({ title }) => {
  var ruta = '/movies/'+title;
  var text = "";

  if (title == 'list') {
    text = "Llistat de pel·licules";
  } else if (title == 'add') {
    text = "Afegir una pel·licula";
  }

  return (
    <>
    
        <div className='container-card'>
          <div className='box'>
            <Link to={ruta}>
                <span className='card-p'>{text}</span>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Card