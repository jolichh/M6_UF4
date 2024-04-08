import React from 'react'
import Tasca from './Tasca'
import FormulariTasques from './FormulariTasques'

const LlistatTasques = () => {
  

  return (
    <>
        <div className='containerTarea'>
            <h1>Mis tareas</h1>
            <div className='contentTarea'>
            <FormulariTasques></FormulariTasques>
            <Tasca completada={false}></Tasca>
            </div>
        </div>
    </>
  )
}

export default LlistatTasques