import React from 'react'
import { useState } from 'react'

const Welcome = ({ username }) => {
  
  return (
    <>
        <h1>Hola {username}!</h1>
        <p>Pel·licules per a l'estiu</p>
    </>
  )
}

export default Welcome