import React from 'react'
import { useState } from 'react'

const Boton = ({ text, onClick, esClick}) => {
  
  const classBoton = esClick ? 'btnClick':'btnReiniciar'

  return (
    <>
        <button className={classBoton} onClick={onClick}>{text}</button>
    </>
  )
}

export default Boton