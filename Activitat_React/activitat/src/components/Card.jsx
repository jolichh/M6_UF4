import React from 'react'
import { Link } from 'react-router-dom'

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
        <div>
            <Link to={ruta}>
                <p>{text}</p>
            </Link>
        </div>
    </>
  )
}

export default Card