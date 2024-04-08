import React, { useSyncExternalStore } from 'react'
import Tasca from './Tasca'
import FormulariTasques from './FormulariTasques'
import { useState } from 'react'

const LlistatTasques = () => {
  const[tasques, setTareas] = useState([]);
  const afegirTasca = ()=>{
    const tasquesActuals = [];
    setTareas(tasquesActuals);
console.log("hola")
  }
  const eliminarTasca = id =>{
    const tasquesRestants = [];
    setTareas(tasquesRestants);
  }

  return (
    <>
        <div className='containerTarea'>
            <h1>Mis tareas</h1>
            <div className='contentTarea'>
            <FormulariTasques onSubmit={afegirTasca}></FormulariTasques>
            <Tasca completada={false}></Tasca>
            </div>
        </div>
    </>
  )
}

export default LlistatTasques