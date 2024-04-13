import React, { useSyncExternalStore } from 'react'
import Tasca from './Tasca'
import FormulariTasques from './FormulariTasques'
import { useState } from 'react'

const LlistatTasques = () => {
  const[tasques, setTareas] = useState([]);
  
  const afegirTasca = (textTascaNova)=>{
    const nova = {
            "id": tasques.length+1,
            "content": textTascaNova,
            "completada": false,
          }
    const tasquesActuals = [...tasques, nova];
    setTareas(tasquesActuals);
  }

  const eliminarTasca = id =>{
    const tasquesRestants = tasques.filter((tasca) => tasca.id !== id);
    setTareas(tasquesRestants);
  }

  const completarTasca = id => {
    const tasquesActualitzat = tasques.map((tasca)=>{
      if (tasca.id === id){
        return {...tasca, completada: !tasca.completada} //invertir estado
      }
      return tasca; //devolver los que no coincide id
    })
    setTareas(tasquesActualitzat);
  }

  return (
    <>
        <div className='containerTarea'>
            <h1>Mis tareas</h1>
            <div className='contentTarea'>
            <FormulariTasques onSubmit={afegirTasca}></FormulariTasques>
            {tasques.map((tasca) =>(
              <Tasca key={tasca.id} id={tasca.id} content={tasca.content} completada={tasca.completada} onClick={()=>eliminarTasca(tasca.id)} onComplete={()=>completarTasca(tasca.id)}></Tasca>
            ))}
            </div>
        </div>
    </>
  )
}

export default LlistatTasques